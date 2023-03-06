import { useEffect, useState } from "react"
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


type Props = {}



export const HomePage: React.FC<Props> = (props): JSX.Element => {

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
    balance: '',
    created_at: '',
    iban: '',
    owner: '',
  })

  useEffect(() => {
    getUser('nhI0JztXcOclASp9mtOvr0c8kd53').then(async (res) => {
      setUser(res)
      const account = await getAccount(res.account)
      setAccount(account)
    })
  }, [])

  const testArray: number[] = [1, 2]


  return (
    <>

      <div className=" flex flex-col items-center w-96 h-50 gap-5 bg-gray-dark z-10 ">
        <div className="flex w-full justify-between">
          <div className="flex flex-col">
            <p className="text-2xl text-white-faded font-medium">{user.first_name} {user.last_name}</p>
            <p className="text-lg text-gray-card font-medium">{user.account}</p>
          </div>
          <img src={user.profile_picture} alt="" className="w-16 h-16 rounded-full" />
        </div>
        <div className="">
          <p className="text-white-faded text-[26px] font-semibold">{account.balance}€</p>
          <p className="text-gray-nav font-medium">Available Balance</p>
        </div>

      </div>
      <div className="relative flex flex-col gap-2" data-carousel='static'>
        <h2 className="text-white-faded text-center font-medium text-2xl">My cards</h2>
        <Carousel />
        <div className='flex justify-center gap-14	'>
          <TransferButton url={"transactions/transfer"} icon={TransferIcon} text={"Transfer"} />
          <TransferButton url={"transactions/bizum"} icon={BizumIcon} text={"Bizum"} />
        </div>
        {/* TRANSACTIONS COMPONENT */}
        <section className="w-full flex flex-col gap-6">
          <div className="flex justify-between">
            <p className="text-lg font-medium text-white-faded">Recent Transactions</p>
            <Link to='' className="underline text-white-faded">View All</Link>
          </div>
          <div className="flex flex-col gap-5 bg-gray-records px-5 py-4 rounded-[20px]">
          {
            testArray.map((test, i) => {
              return (
                <div key={i}>
                  <div className="w-full flex justify-between items-center text-white-faded ">
                    <article className="flex gap-4 items-center">
                      <div className="w-[76px] h-[76px] bg-light-blue rounded-full"></div>
                      <p>Clothes</p>
                    </article>
                    <p>- €400</p>
                  </div>
                  {
                    i < testArray.length - 1 ? (<div className="h-px w-full mt-4 bg-gray-400"></div>) : ("")
                  }
                </div>
              );
            })
          }
          </div>
        </section>
        {/* TRANSACTIONS COMPONENT */}
      </div>
      <NavMenu />
    </>
  )
}