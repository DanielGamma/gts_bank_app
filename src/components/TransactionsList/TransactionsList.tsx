import income from "../../assets/income.svg"
import expense from "../../assets/expense.svg"
import { TransactionItem } from "./TransactionItem"
import { getTransactions, getUser } from "../../services/firebaseFunctions"
import { Transaction } from "../../services/interfaces"
import { useState, useEffect } from 'react'

type Props = {

}

export const TransactionsList: React.FC<Props> = (props): JSX.Element => {

    const [transactions, setTransactions] = useState<Transaction[] | []>([])

    useEffect(() => {
        getUser("IOlHrqIY6Ze7CwbLaj0w5TepRvA3")
            .then(res => getTransactions(res.transactions).then(res => setTransactions(res)))
    }, [])


    console.log(transactions);

    

    return (
        <>
            <div>
                <h2>Transactions Record</h2>
                <div className="flex justify-between  text-white gap-2 h-10">
                    <button className="bg-gray-dark rounded-[20px] w-16">All</button>
                    <div className="flex justify-center items-center gap-2 bg-gray-dark rounded-[20px] w-[120px] ">
                        <img src={income} alt="" />
                        <button >Income</button>
                    </div>
                    <div className="flex justify-center items-center gap-2 bg-gray-dark rounded-[20px] w-[120px]">
                        <img src={expense} alt="" />
                        <button>Expense</button>
                    </div>
                </div>
            </div>

            {
                transactions.map((trade, i) => {
                    return (
                        <TransactionItem key={i} text={trade.receiver_name} money={trade.amount} category={trade.category} />
                    )
                })
            }

        </>
    )
        }
