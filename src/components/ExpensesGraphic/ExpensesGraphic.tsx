import { PieChart, Pie, Cell } from "recharts";
import { getTransactions, getUser } from "../../services/firebaseFunctions";
import { useContext, useEffect, useState } from "react";
import { Transaction } from "../../services/interfaces";
import { corregir, UserContext } from "../../context/UserProvider";
import { sortByCategory, changeToLocalTime, findWeekandSort, sortTransactionsByWeek, sortTransactionsByMonth } from "../../services/utilityFunctions";

type Props = {
  weeklyGraph: boolean
};

type Inner = {
  name: string,
  expense: number,
}
interface TransactionObject {
  [index: string]: Inner[]
}

export const ExpensesGraphic: React.FC<Props> = ({weeklyGraph}): JSX.Element => {

  const colors = ["#DC7633", "#F8C471", "#F4D03F", "#82E0AA", "#A2D9CE", "#AED6F1", "#F5B7B1", "#CD6155", "#D5DBDB"];

  const [expenses, setExpenses] = useState<TransactionObject>({
    weekly: [],
    monthly: [],
  })
  const { currentUser } = useContext(UserContext) as corregir


  const getData = async () => {
    let list: Transaction[] = await getTransactions(currentUser.transactions)
    list = list.map(transaction => {
      transaction.date = changeToLocalTime(transaction.date)
      return transaction
    })
    const weekly = findWeekandSort(list)
    const realWeekly = sortByCategory(weekly.filter(transac => transac.type === 0))
    const realMonthly = sortByCategory(list.filter(transac => transac.type === 0))
    const real = {
      weekly: realWeekly,
      monthly: realMonthly
  }
    setExpenses(real)


  }

  useEffect(() => {

    getData()
  }, [])




  // const expensesForHealth = expenses.filter(expense => expense.category === "Health")
  // const expensesForLeisure = expenses.filter(expense => expense.category === "Leisure")
  // const expensesForEducation = expenses.filter(expense => expense.category === "Education")
  // const expensesForCommuting = expenses.filter(expense => expense.category === "Commuting")
  // const expensesForHome = expenses.filter(expense => expense.category === "Home")
  // const expensesForTraveling = expenses.filter(expense => expense.category === "Traveling")
  // const expensesForGrocery = expenses.filter(expense => expense.category === "Grocery")
  // const expensesForClothes = expenses.filter(expense => expense.category === "Clothes")
  // const expensesForOthers = expenses.filter(expense => expense.category === "Others")


  // function expensesByCategory(someCategory:any[]) {
  //   return someCategory.reduce((acc, e) => {
  //     acc.amount += Math.trunc(e.amount);
  //     acc.name = e.category
  //     return acc
  //   }, {
  //     name: '',
  //     amount: 0
  //   });
  // } 

  // const allExpensesByCategory:Transaction[] = [
  //   expensesByCategory(expensesForHealth),
  //   expensesByCategory(expensesForLeisure),
  //   expensesByCategory(expensesForEducation),
  //   expensesByCategory(expensesForCommuting),
  //   expensesByCategory(expensesForHome),
  //   expensesByCategory(expensesForTraveling),
  //   expensesByCategory(expensesForGrocery),
  //   expensesByCategory(expensesForClothes),
  //   expensesByCategory(expensesForOthers),
  // ]

  // const categories:String[] = [ ...new Set(expenses.map(expense => expense.category))]


  



  return (

    <>
      <div className="mt-5">
        <PieChart width={380} height={310} >
          <Pie
            data={weeklyGraph ? expenses.weekly : expenses.monthly}
            cx={180}
            cy={150}
            label={true}
            labelLine={true}
            innerRadius={20}
            outerRadius={90}
            paddingAngle={0}
            dataKey="expense"
            animationDuration={1000}
            animationBegin={0}
          >
            {
            weeklyGraph ? expenses.weekly.map((entry, index) => (
              <Cell key={index} fill={colors[index % colors.length]} />
            )) : expenses.monthly.map((entry, index) => (
              <Cell key={index} fill={colors[index % colors.length]} />
            ))
            }
          </Pie>
        </PieChart>
      </div>
      <div className="text-white">
        <h3>Categories</h3>
        <div className="flex flex-wrap ">
          {
            weeklyGraph ? expenses.weekly.map((e, i) => {
              return <div key={i} className="flex items-center mb-1 mr-3">
                <div className={`w-2 h-2 mr-1 rounded-full bg-[${colors[i]}]`}></div>
                <p className="text-[10px]">{e.name}</p>
              </div>
            }) : expenses.monthly.map((e, i) => {
              return <div key={i} className="flex items-center mb-1 mr-3">
                <div className={`w-2 h-2 mr-1 rounded-full bg-[${colors[i]}]`}></div>
                <p className="text-[10px]">{e.name}</p>
              </div>
            })
          }
        </div>
      </div>

    </>

  );
};
