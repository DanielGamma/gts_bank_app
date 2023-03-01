import { Link } from "react-router-dom"
import Carousel from "../Carousel/Carousel"
import { db } from '../../config/firebase_config'
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore'
import { useEffect, useState } from "react"

type Props = {}

interface Card {
  card: string,
  card_formatted: string,
  cvc: string,
  expiration_date: string,
  service: string
}


interface User {
  first_name: string,
  last_name: string,
  account: string,
  profile_picture: string,
  card: Card,
  friends: string[]
  gender: string,
  phone_number: string,
  transactions: string[],
  email: string,

}

interface Account {
  balance: string
  created_at: string
  iban: string
  owner: string
}

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



  const getUser = async (uid:string) => {
    const data: any = await getDoc(doc(db, 'users', uid))
    const result: any = await data.data()
    return result
  }

  const getAccount = async (account: string) => {
    const array: any[] = []
    const data: any = await getDocs(query(collection(db, 'accounts'), where('iban', '==', account)))

    data.forEach((doc: any) => array.push(doc.data()))

   
    return array[0]
  }


  useEffect(() => {
    getUser('nhI0JztXcOclASp9mtOvr0c8kd53').then(async (res) => {
      setUser(res)
      const account = await getAccount(res.account)
      setAccount(account)
    })

  }
    , [])

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
        <div className="flex gap-14 mt-[37px] self-center">
          <article className="w-[76px] h-[76px] bg-light-blue rounded-full"></article>
          <article className="w-[76px] h-[76px] bg-light-blue rounded-full"></article>
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
                return <>
                  <div className="w-full flex justify-between items-center text-white-faded ">
                    <article className="flex gap-4 items-center">
                      <div className="w-[76px] h-[76px] bg-light-blue rounded-full"></div>
                      <p>Grocery</p>
                    </article>
                    <p>-€400</p>
                  </div>
                  {
                    i < testArray.length - 1 ? <div className="h-px w-full bg-gray-400"></div> : ''
                  }
                </>
              })
            }
          </div>
        </section>
        {/* TRANSACTIONS COMPONENT */}
      </div>
    </>
  )
}