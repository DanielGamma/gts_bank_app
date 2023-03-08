import { useContext, useEffect, useState } from "react"
// Components
import { TransferButton } from '../TransferButton/TransferButton'
import Carousel from "../Carousel/Carousel"
import { getAccount, getTransactions } from "../../services/firebaseFunctions"
import { Account } from "../../services/interfaces"
import TransferIcon from '../../assets/transferbutton.png'
import BizumIcon from '../../assets/mobile.png'
import { NavMenu } from "../NavMenu/NavMenu"
import { converter } from "../../services/utilityFunctions"
import { corregir, UserContext } from "../../context/UserProvider"
import { Transaction } from "../../services/interfaces"
import { TransitionItem } from "../TransitionItem/TransitionItem"
import { Link } from "react-router-dom"



type Props = {}

let all: Transaction[] = []

export const HomePage: React.FC<Props> = (): JSX.Element => {

  const [transactions, setTransactions] = useState<Transaction[]>([])
  const { currentUser } = useContext(UserContext) as corregir

  const [account, setAccount] = useState<Account>({
    balance: 0,
    created_at: '',
    iban: '',
    owner: '',
  })

  useEffect(() => {
    getAccount(currentUser.account).then(res => setAccount(res))
  }, [])


  useEffect(() => {
    getTransactions(currentUser.transactions).then(res => {
      setTransactions(res)
      return all = res
    })
  }, [])


  console.log(transactions)

  return (
    <>
      <div className=" flex flex-col items-center  h-60 gap-5 bg-gray-dark z-10 -mt-10 -mx-7 pt-7 px-7">
        <div className="flex w-full justify-between">
          <div className="flex flex-col">
            <p className="text-2xl text-white-faded font-medium">{currentUser.first_name} {currentUser.last_name}</p>
            <p className="text-lg text-gray-card font-medium">{currentUser.account}</p>
          </div>
          <img src={currentUser.profile_picture} alt="" className="w-16 h-16 rounded-full" />
        </div>
        <div className="flex flex-col items-center">
          <p className="text-white-faded text-[26px] font-semibold">{converter(account.balance)}€</p>
          <p className="text-gray-nav font-medium">Available Balance</p>
        </div>
      </div>
      <div className=" relative pt-7 flex flex-col gap-6 bg-black rounded-[50px] -mx-7 bottom-10" >
        <h2 className="text-white-faded text-center font-medium text-2xl">My cards</h2>
        <Carousel />
        <div className='flex justify-center gap-14	'>
          <TransferButton url={"transactions/transfer"} icon={TransferIcon} text={"Transfer"} />
          <TransferButton url={"transactions/bizum"} icon={BizumIcon} text={"Bizum"} />
        </div>
      </div>
      <div className="flex justify-between	">
        <p className="font-medium text-xl text-grey-profile">Recent Transactions</p>
        <Link to="/records">
          <p className="text-grey-profile underline text-sm	font-medium	">View All</p>
        </Link>
      </div>
      <div className="bg-gray-records rounded-2xl p-2 mt-3">
        {
          transactions.slice(0, 5).map((trade, i) => {
            return (
              <TransitionItem key={i} text={trade.receiver_name} money={trade.amount} category={trade.category} income={trade.type} />
            )
          })
        }

      </div>
      <NavMenu />
    </>
  )
}