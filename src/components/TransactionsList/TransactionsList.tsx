import income from "../../assets/income.svg"
import expense from "../../assets/expense.svg"
import { TransitionItem } from "../TransitionItem/TransitionItem"
import { getTransactions, getUser } from "../../services/firebaseFunctions"
import { Transaction } from "../../services/interfaces"
import { useState, useEffect, useContext } from 'react'
import { corregir, UserContext } from "../../context/UserProvider"

type Props = {
    transactionType : string,
    setTransactionType : React.Dispatch<React.SetStateAction<string>>
}

let all: Transaction[] = []

export const TransactionsList: React.FC<Props> = ({transactionType, setTransactionType}): JSX.Element => {

    const [transactions, setTransactions] = useState<Transaction[]>([])
    const {currentUser} = useContext(UserContext) as corregir

    useEffect(() => {
            getTransactions(currentUser.transactions).then(res => {
                setTransactions(res)
                return all = res 
            })
    }, [])

    useEffect(() => {
        if (transactionType === "all") {
            setTransactions(all)
        } else if (transactionType === "income") {
            setTransactions(all.filter(e => e.type === 1))
        } else if (transactionType === "expenses") {
            setTransactions(all.filter(e => e.type === 0))
        }
    }, [transactionType])

    return (
        <>
            <div>
                <h2>Transactions Record</h2>
                <div className="flex justify-around opacity-60 hover:opacity-100 text-white gap-2 h-10">
                    <button className="bg-gray-dark rounded-[20px] w-16 " onClick={() => setTransactionType("all")}>All</button>
                  
                    <div onClick={() => setTransactionType("income")} className="flex justify-center items-center gap-2 bg-gray-dark opacity-40 hover:opacity-100 rounded-[20px] w-[120px]">
                        <img src={income} alt="income" />
                        <button >Income</button>
                    </div>
                    <div onClick={() => setTransactionType("expenses")} className="flex justify-center items-center gap-2 bg-gray-dark opacity-40 hover:opacity-100 rounded-[20px] w-[120px]">
                        <img src={expense} alt="" />
                        <button >Expense</button>
                    </div>
                </div>
            </div>
            <div className="bg-gray-records rounded-2xl p-2 mt-3">
                {
                    transactions.map((trade, i) => {
                        return (
                        <>
                            <TransitionItem key={i} text={trade.receiver_name} money={trade.amount} category={trade.category} income={trade.type} />
                            <div className={i === transactions.length - 1 ? "hidden" : "w-full h-px bg-white"}></div>
                            </>
                        )
                    })
                }

            </div>
        </>
    )
}
