
import { NavMenu } from "../NavMenu/NavMenu";
import { Header } from "../Header/Header";
import TransactionsGraphic from "../TransactionsGraphic/TransactionsGraphic";
import { useContext, useEffect, useState } from "react";
import { TransactionsList } from "../TransactionsList/TransactionsList";
import { corregir, UserContext } from "../../context/UserProvider";
import { ExpensesGraphic } from "../ExpensesGraphic/ExpensesGraphic";
import { Inner, Transaction } from "../../services/interfaces";
import { getTransactions } from "../../services/firebaseFunctions";
import { changeToLocalTime, findWeekandSort } from "../../services/utilityFunctions";

type Props = {};

interface TransactionObject {
  [index: string]: Transaction[]
}

export const RecordsPage: React.FC<Props> = (props): JSX.Element => {

  const [weeklyGraph, setWeeklyGraph] = useState<boolean>(true)
  const [transactions, setTransactions] = useState<TransactionObject>({
    weekly: [],
    monthly: [],
  })
  const [transactionType, setTransactionType] = useState<string>("")
  const { currentUser } = useContext(UserContext) as corregir

  const getData = async () => {
    let list: Transaction[] = await getTransactions(currentUser.transactions)
    list = list.map(transaction => {
      transaction.date = changeToLocalTime(transaction.date)
      return transaction
    })
    const weekly = findWeekandSort(list)

    const real = {
      weekly: weekly,
      monthly: list
    }
    setTransactions(real)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='w-full  '>
      <Header content='Transactions' arrow={false} url='/' />
      <h2 className='text-white-form text-[20px] font-medium'>Graphic</h2>
      <div className='flex gap-6 w-full justify-end'>
        <button onClick={() => setWeeklyGraph(true)} className={`w-[110px] h-10 text-white text-[16px] font-medium flex  bg-gray-dark justify-center items-center rounded-3xl ${weeklyGraph ? '': 'opacity-70'}`}>Week</button>
        <button onClick={() => setWeeklyGraph(false)} className={`w-[110px] h-10 text-white text-[16px] font-medium flex bg-gray-dark justify-center items-center rounded-3xl ${weeklyGraph ? 'opacity-70': ''}`}>Month</button>
      </div>
      <div className="py-10">

        {
          transactionType != 'expenses' ? <TransactionsGraphic weeklyGraph={weeklyGraph} list={weeklyGraph ? transactions.weekly : transactions.monthly} /> : <ExpensesGraphic list={weeklyGraph ? transactions.weekly : transactions.monthly} />
        }

      </div>
      <p className="text-lg font-medium text-white-faded mt-4">Transactions Record</p>

      <TransactionsList transactionType={transactionType} setTransactionType={setTransactionType} />
      <NavMenu />
    </div>
  )
}
