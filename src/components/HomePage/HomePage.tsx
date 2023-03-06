import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
// Components
import { TransferButton } from '../TransferButton/TransferButton'
import Carousel from "../Carousel/Carousel"
// Firebase services
import { getUser, getAccount } from "../../services/firebaseFunctions"
// Interface models
import { User, Account } from "../../services/interfaces"
// Icons
import TransferIcon from '../../assets/transferbutton.png'
import BizumIcon from '../../assets/mobile.png'
import { NavMenu } from "../NavMenu/NavMenu"
import { TransactionsList } from "../TransactionsList/TransactionsList"
import { converter } from "../../services/utilityFunctions"
import { corregir, UserContext } from "../../context/UserProvider"

type Props = {}



export const HomePage: React.FC<Props> = (): JSX.Element => {

  const [user, setUser] = useState<User>({
    first_name: '',
    last_name: '',
    account: '',
    profile_picture: '',
    card: {
      card: '',
      card_formatted: '',
      cvc: '',
      expiration_date: '',
      service: ''
    },
    friends: [],
    gender: '',
    phone_number: '',
    transactions: [],
    email: '',
  })
  const [account, setAccount] = useState<Account>({
    balance: 0,
    created_at: '',
    iban: '',
    owner: '',
  })

  const {currentUser} = useContext(UserContext) as corregir

  useEffect(() => {
    getUser('pgT11DMkcHR52WfUA1Q5N4hcCtX2').then(async (res) => {
      setUser(res)
      const account = await getAccount(res.account)
    console.log(account);
    
      setAccount(account)
    })
  }
    , [])

  const testArray: number[] = [1]


  return (
    <>
      <div className=" flex flex-col items-center  h-60 gap-5 bg-gray-dark z-10 -mt-10 -mx-7 pt-7 px-7">
        <div className="flex w-full justify-between">
          <div className="flex flex-col">
            <p className="text-2xl text-white-faded font-medium">{user.first_name} {user.last_name}</p>
            <p className="text-lg text-gray-card font-medium">{user.account}</p>
          </div>
          <img src={user.profile_picture} alt="" className="w-16 h-16 rounded-full" />
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
      <NavMenu />
    </>
  )
}