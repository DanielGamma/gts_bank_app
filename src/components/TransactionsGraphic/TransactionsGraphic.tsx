
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { db } from '../../config/firebase_config';
import { getUser, getTransactions } from '../../services/firebaseFunctions';
import { Transaction, Inner } from '../../services/interfaces';
import { RecordsPage } from '../RecordsPage/RecordsPage';
import { findWeekandSort, changeToLocalTime, divideWeeks, getWeek, sortTransactionsByWeek, sortTransactionsByMonth } from '../../services/utilityFunctions'
import { corregir, UserContext } from '../../context/UserProvider';

type Props = {
    weeklyGraph: boolean
}

interface TransactionObject {
    [index: string]: Inner[]
}

const TransactionsGraphic: React.FC<Props> = ({ weeklyGraph }): JSX.Element => {

    const [transactions, setTransactions] = useState<TransactionObject>({
        weekly: [],
        monthly: [],
    })
   
    const {currentUser} = useContext(UserContext) as corregir

    
    
    const getData = async() => {
        let list: Transaction[] = await getTransactions(currentUser.transactions)
        list = list.map(transaction => {
            transaction.date = changeToLocalTime(transaction.date)
            return transaction
        })
        const weekly = findWeekandSort(list)
        const real = {
            weekly: sortTransactionsByWeek(weekly),
            monthly: sortTransactionsByMonth(list),
        }
        setTransactions(real)
    }
    
    useEffect(() => {
      
            getData()
      
        
    }, [])




    return (
        <>
            {
                transactions ? <BarChart
                    width={369}
                    height={240}
                    data={weeklyGraph ? transactions.weekly : transactions.monthly}
                    margin={{ top: 30, right: 5, bottom: 5, left: 5 }}>
                    <XAxis dataKey={'name'} axisLine={false} tickLine={false} />
                    <YAxis tickLine={false} />
                    <Tooltip />
                   
                    <Bar barSize={8} dataKey="income" fill="#5A6ACF" />
                    <Bar barSize={8} dataKey="expense" fill="#D8D9DB" />
                </BarChart> : ''
            }
            <div className="ml-24 flex flex-wrap ">
                         <div  className="flex items-center mb-1 mr-3">
                            <div className={`w-2 h-2 mr-1 rounded-full bg-[#5A6ACF]`}></div>
                            <p className="text-[10px] text-white">Income</p>
                        </div>
                         <div  className="flex items-center mb-1 mr-3">
                            <div className={`w-2 h-2 mr-1 rounded-full bg-[#D8D9DB]`}></div>
                            <p className="text-[10px] text-white">Expense</p>
                        </div>
            </div>

        </>
    )
}


export default TransactionsGraphic