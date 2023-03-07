import { Outlet, useLocation } from "react-router";
import { NavMenu } from "../NavMenu/NavMenu";
import { Header } from "../Header/Header";
import TransactionsGraphic from "../TransactionsGraphic/TransactionsGraphic";
import { useContext, useState } from "react";
import { TransactionsList } from "../TransactionsList/TransactionsList";
import { corregir, UserContext } from "../../context/UserProvider";
import { Link } from "react-router-dom";
import { ExpensesGraphic } from "../ExpensesGraphic/ExpensesGraphic";

type Props = {};

export const RecordsPage: React.FC<Props> = (props): JSX.Element => {

  const [weeklyGraph, setWeeklyGraph] = useState<boolean>(true)
  const [transactionType, setTransactionType] = useState<string>("")

  const { currentUser } = useContext(UserContext) as corregir



  return (
    <div className='w-full  '>
      <Header content='Transactions' arrow={false} url='/' />
      <h2 className='text-white-form text-[20px] font-medium'>Graphic</h2>
      <div className='flex gap-6 w-full justify-end'>
        <button onClick={() => setWeeklyGraph(true)} className='w-[110px] h-10 text-white text-[16px] font-medium flex bg-gray-dark justify-center items-center rounded-3xl'>Week</button>
        <button onClick={() => setWeeklyGraph(false)} className='w-[110px] h-10 text-white text-[16px] font-medium flex bg-gray-dark justify-center items-center rounded-3xl'>Month</button>
      </div>
      <div className="py-10">


        {
          transactionType != 'expenses' ? <TransactionsGraphic weeklyGraph={weeklyGraph} /> : <ExpensesGraphic weeklyGraph={weeklyGraph}/>
        }



      </div>
      <p className="text-lg font-medium text-white-faded mt-4">Transactions Record</p>
      {/* <div className="flex flex-col gap-5 bg-gray-records px-5 py-4 rounded-[20px]">
            {
              testArray.map((test, i) => {
                return <div key={i}>
                <div className="w-full flex justify-between items-center text-white-faded ">
                  <article className="flex gap-4 items-center">
                    <div className="w-[76px] h-[76px] bg-light-blue rounded-full"></div>
                    <p>Clothes</p>
                  </article>
                  <p>- €400</p>
                </div>
                {
                  i < testArray.length - 1 ? (<div className="h-px w-full mt-4 bg-gray-400"></div>) : ("")
                }
              </div>
              })
            }
          </div> */}

      <TransactionsList transactionType={transactionType} setTransactionType={setTransactionType} />
      <NavMenu />
    </div>
  )
}
