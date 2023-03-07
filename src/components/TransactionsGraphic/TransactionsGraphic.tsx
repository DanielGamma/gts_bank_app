
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { db } from '../../config/firebase_config';
import { getUser, getTransactions } from '../../services/firebaseFunctions';
import { Transaction, Inner } from '../../services/interfaces';
import { RecordsPage } from '../RecordsPage/RecordsPage';
import { findWeekandSort, changeToLocalTime, divideWeeks, getWeek, sortTransactionsByWeek, sortTransactionsByMonth } from '../../services/utilityFunctions'

type Props = {
    weeklyGraph : boolean
}

interface TransactionObject {
    [index: string]: Inner[]
}

const TransactionsGraphic: React.FC<Props> = ({weeklyGraph}): JSX.Element => {

    const [transactions, setTransactions] = useState<TransactionObject>({
        weekly:[],
        monthly:[],
    })
    const [userId, setUserId] = useState<string>('hHERVC0jfYYpKlPqYEktYcVZcXE2')
    

    useEffect(() => {
        if (userId) {
            getUser(userId).then(async (res) => {
                let list: Transaction[] = await getTransactions(res.transactions)
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
            })
        }
    }, [userId])




    return (
        <>
            {
                transactions ? <BarChart
                    width={369}
                    height={240}
                    data={weeklyGraph ? transactions.weekly : transactions.monthly}
                    margin={{ top: 30, right: 5, bottom: 5, left: 5 }}>
                    <XAxis dataKey={'name'} axisLine={false} tickLine={false}/>
                    <YAxis tickLine={false} />
                    <Tooltip />
                    <Legend iconSize={5} iconType='circle' />
                    <Bar barSize={8} dataKey="income" fill="#5A6ACF" />
                    <Bar barSize={8} dataKey="expense" fill="#D8D9DB" />
                </BarChart> : ''
            }

        </>
    )
}


export default TransactionsGraphic