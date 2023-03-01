
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { db } from '../../config/firebase_config';
import { getUser } from '../../services/firebaseFunctions';
import { Transaction,DocumentData } from '../../services/interfaces';



type Props = {}


interface TransactionObject {
    type0 : Transaction[],
    type1 : Transaction[]
}

const TransactionsGraphic: React.FC<Props> = (props): JSX.Element => {


    const [transactions, setTransactions] = useState<TransactionObject>()
    const [userId, setUserId] = useState<string>('hHERVC0jfYYpKlPqYEktYcVZcXE2')


    // const data: Transaction[] = [
    //     {
    //         amount: 35.53,
    //         category: "Commuting",
    //         date: new Date("2023-01-15T23:00:00.000Z"),
    //         origin_account: "ES8501281115756786467939",
    //         receiver_name: "Wikido",
    //         type: 0,
    //         user_uid: "hHERVC0jfYYpKlPqYEktYcVZcXE2",
    //     },
    //     {
    //         amount: 35.53,
    //         category: "Commuting",
    //         date: new Date( "2023-01-15T23:00:00.000Z"),
    //         origin_account: "ES8501281115756786467939",
    //         receiver_name: "Wikido",
    //         type: 0,
    //         user_uid: "hHERVC0jfYYpKlPqYEktYcVZcXE2",
    //     },{
    //         amount: 35.53,
    //         category: "Commuting",
    //         date: new Date( "2023-01-15T23:00:00.000Z"),
    //         origin_account: "ES8501281115756786467939",
    //         receiver_name: "Wikido",
    //         type: 0,
    //         user_uid: "hHERVC0jfYYpKlPqYEktYcVZcXE2",
    //     },{
    //         amount: 35.53,
    //         category: "Commuting",
    //         date: new Date( "2023-01-15T23:00:00.000Z"),
    //         origin_account: "ES8501281115756786467939",
    //         receiver_name: "Wikido",
    //         type: 0,
    //         user_uid: "hHERVC0jfYYpKlPqYEktYcVZcXE2",
    //     },{
    //         amount: 35.53,
    //         category: "Commuting",
    //         date: new Date( "2023-01-15T23:00:00.000Z"),
    //         origin_account: "ES8501281115756786467939",
    //         receiver_name: "Wikido",
    //         type: 0,
    //         user_uid: "hHERVC0jfYYpKlPqYEktYcVZcXE2",
    //     },{
    //         amount: 35.53,
    //         category: "Commuting",
    //         date: new Date( "2023-01-15T23:00:00.000Z"),
    //         origin_account: "ES8501281115756786467939",
    //         receiver_name: "Wikido",
    //         type: 0,
    //         user_uid: "hHERVC0jfYYpKlPqYEktYcVZcXE2",
    //     },{
    //         amount: 35.53,
    //         category: "Commuting",
    //         date: new Date( "2023-01-15T23:00:00.000Z"),
    //         origin_account: "ES8501281115756786467939",
    //         receiver_name: "Wikido",
    //         type: 0,
    //         user_uid: "hHERVC0jfYYpKlPqYEktYcVZcXE2",
    //     },{
    //         amount: 35.53,
    //         category: "Commuting",
    //         date: new Date( "2023-01-15T23:00:00.000Z"),
    //         origin_account: "ES8501281115756786467939",
    //         receiver_name: "Wikido",
    //         type: 0,
    //         user_uid: "hHERVC0jfYYpKlPqYEktYcVZcXE2",
    //     }
    // ];
    // const data2 = data.map(e => {
    //     let day = ''
    //     switch (e.date.getDay()){
    //         case 0 :
    //             day = ''
    //     }
    //     return {
    //         date: e.date,
    //         type: e.type,
    //         amount: e.amount
    //     }
    // })


    const getTransactions = async (transactionsList: string[]) => {
        const data: Transaction[] = await Promise.all(transactionsList.map(transaction => getDoc(doc(db, 'transactions', transaction)).then(res => res.data() as Transaction)))
        return data
    }


    useEffect(() => {
        getUser(userId).then(async (res) => {
            const list:Transaction[] = await getTransactions(res.transactions)
            // setTransactions(() => {
            //     const result {
            //         type0 : list.filter(transaction => transaction.type == 0),
            //         type1 : list.filter(transaction => transaction.type == 1),

            //     }
            //     return result
            // })
        })
    }, [])



    return (
        <div className='w-screen h-screen '>



            {/* <BarChart

                width={369}
                height={242}
                data={}

            >

                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar barSize={5} dataKey='amount' fill="#8884d8" />
                <Bar barSize={5} dataKey="amount" fill="#82ca9d" />
            </BarChart> */}

        </div>
    )
}


export default TransactionsGraphic