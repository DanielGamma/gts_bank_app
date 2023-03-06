import { PieChart, Pie, Cell  } from "recharts";
import { getTransactions, getUser } from "../../services/firebaseFunctions";
import { useEffect, useState } from "react";
import { Transaction } from "../../services/interfaces";

type Props = {};

export const ExpensesGraphic: React.FC<Props> = (props): JSX.Element => {
  
  const colors = ["#FF764A", "#FFA600", "#003F5C", "#374C80","#7A5195", "#BC5090", "#EF5675","#2ABF31","#29B6E5"];
  
  const [expenses, setExpenses] = useState<Transaction[] | []>([])
  
  useEffect(() => {
    getUser("IOlHrqIY6Ze7CwbLaj0w5TepRvA3")
    .then(res=> getTransactions(res.transactions).then(res => setExpenses(res.filter(transac => transac.type === 0))))
  }, [])
  

  const expensesForHealth = expenses.filter(expense => expense.category === "Health")
  const expensesForLeisure = expenses.filter(expense => expense.category === "Leisure")
  const expensesForEducation = expenses.filter(expense => expense.category === "Education")
  const expensesForCommuting = expenses.filter(expense => expense.category === "Commuting")
  const expensesForHome = expenses.filter(expense => expense.category === "Home")
  const expensesForTraveling = expenses.filter(expense => expense.category === "Traveling")
  const expensesForGrocery = expenses.filter(expense => expense.category === "Grocery")
  const expensesForClothes = expenses.filter(expense => expense.category === "Clothes")
  const expensesForOthers = expenses.filter(expense => expense.category === "Others")


  function expensesByCategory(someCategory:any[]) {
    return someCategory.reduce((acc, e) => {
      acc.amount += Math.trunc(e.amount);
      acc.name = e.category
      return acc
    }, {
      name: '',
      amount: 0
    });
  } 

  const allExpensesByCategory:Transaction[] = [
    expensesByCategory(expensesForHealth),
    expensesByCategory(expensesForLeisure),
    expensesByCategory(expensesForEducation),
    expensesByCategory(expensesForCommuting),
    expensesByCategory(expensesForHome),
    expensesByCategory(expensesForTraveling),
    expensesByCategory(expensesForGrocery),
    expensesByCategory(expensesForClothes),
    expensesByCategory(expensesForOthers),
  ]
  
  const categories:String[] = [ ...new Set(expenses.map(expense => expense.category))]
  
  interface propsGraph {
    cx: number,
    cy: number,
    midAngle: number,
    innerRadius:number,
    outerRadius:number,
    percent:number,
    index:number
  }

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel:React.FC<propsGraph> = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (

    <div className="text-white">
            <PieChart width={380} height={310} >
            <Pie
            data={allExpensesByCategory}
            cx={180}
            cy={150}
             label={renderCustomizedLabel}
            innerRadius={65}
            outerRadius={120}
            fill="#8884d8"
            paddingAngle={0}
            dataKey="amount"
            >
            {allExpensesByCategory.map((entry, index) => (
                <Cell key={index} fill={colors[index % colors.length]} />
            ))}
            </Pie>
        </PieChart>

        <h3>Categories</h3>
        <div className="flex flex-wrap mb-4">
            {
                allExpensesByCategory.map((e,i) => {
                    return <div key={i} className="flex items-center mb-1 mr-3">
                            <div className={`w-2 h-2 z-10 mr-1 rounded-full bg-[${colors[i]}]`}></div>
                            <p className="text-[10px]">{categories[i]}</p>
                        </div> 
                })
            }
        </div>
    </div>

  );
};
