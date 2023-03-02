
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { db } from '../../config/firebase_config';
import { getUser } from '../../services/firebaseFunctions';
import { Transaction } from '../../services/interfaces';
import { RecordsPage } from '../RecordsPage/RecordsPage';



type Props = {}


interface TransactionObject {
    type0: Transaction[],
    type1: Transaction[]
}

type Week = {
    [index: string]: Transaction[]
}



const TransactionsGraphic: React.FC<Props> = (props): JSX.Element => {


    const [transactions, setTransactions] = useState<TransactionObject>()
    const [userId, setUserId] = useState<string>('hHERVC0jfYYpKlPqYEktYcVZcXE2')


    const data: Transaction[] = [
        {
            amount: 20,
            category: "Commuting",
            date: new Date("2023-01-15T23:00:00.000Z"),
            origin_account: "ES8501281115756786467939",
            receiver_name: "Mon",
            type: 0,
            user_uid: "hHERVC0jfYYpKlPqYEktYcVZcXE2",
        },
        {
            amount: 20,
            category: "Commuting",
            date: new Date("2023-01-15T23:00:00.000Z"),
            origin_account: "ES8501281115756786467939",
            receiver_name: "Tue",
            type: 0,
            user_uid: "hHERVC0jfYYpKlPqYEktYcVZcXE2",
        }, {
            amount: 20,
            category: "Commuting",
            date: new Date("2023-01-15T23:00:00.000Z"),
            origin_account: "ES8501281115756786467939",
            receiver_name: "Wed",
            type: 0,
            user_uid: "hHERVC0jfYYpKlPqYEktYcVZcXE2",
        }, {
            amount: 32,
            category: "Commuting",
            date: new Date("2023-01-15T23:00:00.000Z"),
            origin_account: "ES8501281115756786467939",
            receiver_name: "Thu",
            type: 0,
            user_uid: "hHERVC0jfYYpKlPqYEktYcVZcXE2",
        }, {
            amount: 5,
            category: "Commuting",
            date: new Date("2023-01-15T23:00:00.000Z"),
            origin_account: "ES8501281115756786467939",
            receiver_name: "Fri",
            type: 0,
            user_uid: "hHERVC0jfYYpKlPqYEktYcVZcXE2",
        }, {
            amount: 0,
            category: "Commuting",
            date: new Date("2023-01-15T23:00:00.000Z"),
            origin_account: "ES8501281115756786467939",
            receiver_name: "Sat",
            type: 0,
            user_uid: "hHERVC0jfYYpKlPqYEktYcVZcXE2",
        }, {
            amount: 10,
            category: "Commuting",
            date: new Date("2023-01-15T23:00:00.000Z"),
            origin_account: "ES8501281115756786467939",
            receiver_name: "Sun",
            type: 0,
            user_uid: "hHERVC0jfYYpKlPqYEktYcVZcXE2",
        }
    ];
    const data2 = data.map(e => {
        let day = ''
        switch (e.date.getDay()) {
            case 0:
                day = ''
        }
        return {
            date: e.date,
            type: e.type,
            amount: e.amount
        }
    })


    const getTransactions = async (transactionsList: string[]) => {
        const data: Transaction[] = await Promise.all(transactionsList.map(transaction => getDoc(doc(db, 'transactions', transaction)).then(res => res.data() as Transaction)))
        return data
    }


    useEffect(() => {
        getUser(userId).then(async (res) => {
            const list: Transaction[] = await getTransactions(res.transactions)
            const days: Week = list.reduce((acc: Week, transaction: Transaction) => {
                const date: keyof Week = new Date(transaction.date).toUTCString().slice(0, 3)

                if(Object.hasOwn(acc,date)){
                    acc[date].push(transaction)
                }else{
                    acc[date] = []
                    acc[date].push(transaction)
                }
                return acc
            }, {})


            // setTransactions(() => {
            //     const result {
            //         type0 : list.filter(transaction => transaction.type == 0),
            //         type1 : list.filter(transaction => transaction.type == 1),

            //     }
            //     return result
            // })
        })
    }, [userId])



    return (
        <BarChart
            width={369}
            height={240}
            data={data}
            margin={{ top: 30, right: 5, bottom: 5, left: 5 }}>
            <XAxis dataKey={'receiver_name'} axisLine={false} tickLine={false} />
            <YAxis tickLine={false} />
            <Tooltip />
            <Legend iconSize={5} iconType='circle' />
            <Bar barSize={5} dataKey='Income' fill="#5A6ACF" />
            <Bar barSize={5} dataKey="Expenses" fill="#D8D9DB" />
        </BarChart>


    )
}


export default TransactionsGraphic