import income from "../../assets/income.svg"
import expense from "../../assets/expense.svg"
import { TransactionItem } from "./TransactionItem"

type Props = {
     
}

export const TransactionsList: React.FC<Props> = (props): JSX.Element => {


    const transacciones = [
        { text: "Verduleria", money: 1200 },
        { text: "Auto", money: 3000},
        { text: "Home", money: 500},
        { text: "Mobile", money: 40},
        { text: "Capricho", money: 200},
        
    ]


// const handleOnClick = () => {
//  const operaciones = {
//    method: 'POST',
//      headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ email:"rfordham4@ning.com", password: "rfordhamgts"})
//  };
// fetch("gts-bank.firebaseapp.com/verifyPassword?key=AIzaSyDcNEJpRmKvoQdN0IN17F326uiiUBkswS8", operaciones)
//   .then(response => response.json())
//  .then(result => console.log(result));
//};


return (
    <>
        <div>
            <h2>Transactions Record</h2>
            <div className="flex justify-between  text-white gap-2 h-10">
                <button className="bg-gray-dark rounded-[20px] w-16">All</button>
                <div className="flex justify-center items-center gap-2 bg-gray-dark rounded-[20px] w-[120px] ">
                    <img src={income} alt="" />
                    <button>Income</button>
                </div>
                <div className="flex justify-center items-center gap-2 bg-gray-dark rounded-[20px] w-[120px]">
                    <img src={expense} alt="" />
                    <button>Expense</button>
                </div>
            </div>
        </div>

        {
            transacciones.map((e, i) => {
                return (
                    <TransactionItem key={i} text={e.text} money={e.money} />
                )
            })
        }

    </>
)
}
