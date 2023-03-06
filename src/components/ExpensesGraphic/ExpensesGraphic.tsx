import { PieChart, Pie, Cell  } from "recharts";
import { getTransactions, getUser } from "../../services/firebaseFunctions";
import { useEffect, useState } from "react";
import { Transaction } from "../../services/interfaces";


type Props = {};

interface Data {
    name : string,
    value: number
}

export const ExpensesGraphic: React.FC<Props> = (props): JSX.Element => {

  const data:Data[] = [
    { name: "Transportation", value: 450 },
    { name: "Clothes", value: 200 },
    { name: "Home", value: 250 },
    { name: "Education", value: 100 },
    { name: "Catering", value: 500 },
    { name: "Health", value: 350 },
    { name: "Leisure", value: 350 }
  ];

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
  

  console.log(allExpensesByCategory);



  return (

    <div className="text-white">
            <PieChart width={380} height={310} >
            <Pie
            data={allExpensesByCategory}
            cx={180}
            cy={150}
            innerRadius={65}
            outerRadius={120}
            fill="#8884d8"
            paddingAngle={0}
            dataKey="amount"
            >
            {data.map((entry, index) => (
                <Cell key={index} fill={colors[index % colors.length]} />
            ))}
            </Pie>
        </PieChart>

        <h3>Categories</h3>
        <div className="flex flex-wrap mb-4">
            {
                data.map((e,i) => {
                    return <div key={i} className="flex items-center mb-1 mr-3">
                            <div className={`w-2 h-2 mr-1 rounded-full bg-[${colors[i]}]`}></div>
                            <p className="text-[10px]">{categories[i]}</p>
                        </div> 
                })
            }
        </div>
    </div>

  );
};
