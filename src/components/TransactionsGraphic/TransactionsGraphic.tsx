
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { db } from '../../config/firebase_config';
import { getUser, getTransactions } from '../../services/firebaseFunctions';
import { Transaction } from '../../services/interfaces';
import { RecordsPage } from '../RecordsPage/RecordsPage';
import { findWeekandSort,changeToLocalTime, divideWeeks, getWeek, sortTransactionsByWeek, sortTransactionsByMonth  } from '../../services/utilityFunctions'

type Props = {}

interface TransactionObject {
    [index:string] : Inner[]
}

type Inner = {
    name: string,
    income: number,
    expense: number
}



const TransactionsGraphic: React.FC<Props> = (props): JSX.Element => {

    const [transactions, setTransactions] = useState<TransactionObject>()
    const [userId, setUserId] = useState<string>('hHERVC0jfYYpKlPqYEktYcVZcXE2')

    useEffect(() => {
        if(userId){
            getUser(userId).then(async (res) => {
                // let list: Transaction[] = await getTransactions(res.transactions)
                let list: Transaction[] = JSON.parse(localStorage.getItem('lista'))
                list = list.map(transaction => {
                    transaction.date = changeToLocalTime(transaction.date)
                    return transaction
                })
                console.clear()
                const weekly = findWeekandSort(list)
                
                const real = {
                    weekly : sortTransactionsByWeek(weekly),
                    monthly : sortTransactionsByMonth(list)
                }
                setTransactions(real)

            })
        }
    }, [userId])


    

    return (
        <BarChart
            width={369}
            height={240}
            data={transactions ? transactions.weekly : }
            margin={{ top: 30, right: 5, bottom: 5, left: 5 }}>
            <XAxis dataKey={'name'} axisLine={false} tickLine={false} />
            <YAxis tickLine={false} />
            <Tooltip />
            <Legend iconSize={5} iconType='circle' />
            <Bar barSize={8} dataKey="income" fill="#5A6ACF" />
            <Bar barSize={8} dataKey="expenses" fill="#D8D9DB" />
        </BarChart>


    )
}


export default TransactionsGraphic