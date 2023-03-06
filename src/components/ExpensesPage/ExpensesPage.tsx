
import { ExpensesGraphic } from "../ExpensesGraphic/ExpensesGraphic";
import { NavMenu } from "../NavMenu/NavMenu"
import { getTransactions, getUser } from "../../services/firebaseFunctions";
import { useEffect, useState } from "react";
import { Transaction } from "../../services/interfaces";

type Props = {};

export const ExpensesPage: React.FC<Props> = (props): JSX.Element => {
  
  const [expenses, setExpenses] = useState<Transaction[] | []>([])

  useEffect(() => {
    getUser("IOlHrqIY6Ze7CwbLaj0w5TepRvA3")
    .then(res=> getTransactions(res.transactions).then(res => setExpenses(res.filter(transac => transac.type === 0))))
  }, [])
  

  return (
    <>
      
      <ExpensesGraphic />

      <h3 className="text-white mt-6 text-[20px] text-[#EEEEEECC]">Expenses Record</h3>

      <div className="flex flex-col mb-20 gap-5 bg-gray-records px-5 py-4 rounded-[20px]">
        {expenses.map((expense, i) => {
          return (
            <div key={i}>
              <div className="w-full flex justify-between items-center text-white-faded ">
                <article className="flex gap-4 items-center">
                  <div className="w-[76px] h-[76px] bg-light-blue rounded-full"></div>
                  <p>{expense.receiver_name}</p>
                </article>
                <p>- €{expense.amount}</p>
              </div>
              {
                i < expenses.length - 1 ? (<div className="h-px w-full mt-4 bg-gray-400"></div>) : ("")
              }
            </div>
          );
        })}
      </div>

      <NavMenu />
    </>
  );
};
