
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { db } from '../../config/firebase_config';
import { getUser, getTransactions } from '../../services/firebaseFunctions';
import { Transaction } from '../../services/interfaces';
import { RecordsPage } from '../RecordsPage/RecordsPage';
import { changeToLocalTime, divideWeeks } from '../../services/utilityFunctions'

type Props = {}

interface TransactionObject {
    type0: Transaction[],
    type1: Transaction[]
}

const TransactionsGraphic: React.FC<Props> = (props): JSX.Element => {

    const [transactions, setTransactions] = useState<Transaction[]>()
    const [userId, setUserId] = useState<string>('hHERVC0jfYYpKlPqYEktYcVZcXE2')

    useEffect(() => {
        getUser(userId).then(async (res) => {
            // let list: Transaction[] = await getTransactions(res.transactions)
            let list: Transaction[] = JSON.parse(localStorage.getItem('lista'))
            list = list.map(transaction => {
                transaction.date = changeToLocalTime(transaction.date)
                return transaction
            })
            // Expected output: "1975-08-19T23:15:30.000Z"
            console.clear()
            const sortedList = list.reduce((acc: any, transaction: Transaction) => {
                const dayNumber = new Date(transaction.date).getDate().toString()
                if (!Object.hasOwn(acc, dayNumber)) {
                    acc[dayNumber] = []
                }
                acc[dayNumber].push(transaction)
                return acc
            }, {})
            
            // getWeek(divideWeeks(sortedList))
            setTransactions(divideWeeks(sortedList))

        })
    }, [userId])


    console.log(transactions);

    return (
        <BarChart
            width={369}
            height={240}
            data={transactions}
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