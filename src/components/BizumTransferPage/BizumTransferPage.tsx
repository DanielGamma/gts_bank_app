import { Header } from "../Header/Header"
import { useForm, SubmitHandler } from "react-hook-form";
import {  User, Account } from "../../services/interfaces";
import { useContext, useEffect, useState } from "react";
import { corregir, UserContext } from "../../context/UserProvider";
import { setDoc, doc, getDocs, query, collection, where, getDoc, updateDoc, arrayUnion } from "@firebase/firestore";
import { db } from "../../config/firebase_config";
import { createTransferId } from "../../services/utilityFunctions";
import { changeAccountValues, getAccount, getUser } from "../../services/firebaseFunctions";

type Props = {}

export interface formData{
  receiverName:string;
  receiverPhone:string;
  amount:string;
  description: string;
 
}

interface Placeholder {
  [index:string] : string
}


export const BizumTransferPage: React.FC<Props> = (props): JSX.Element => {

  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm<formData>();
  const { currentUser, setCurrentUser } = useContext(UserContext) as corregir
  const [friends, setFriends] = useState<User[]>([])
  const [account, setAccount] = useState<Account>({
    balance: 0,
    created_at: '',
    iban: '',
    owner: ''
  })
  const[placeholder, setPlaceholder] = useState<Placeholder>({
    receivingName : '',
    receivingAccount : '',
    receivingPhone: ''
  })

  const getData = async (user: User) => {
    const friends = await Promise.all(user.friends.map((id) => getUser(id)))
    const account = await getAccount(user.account)
    return {
      friends,
      account
    }
  }

  useEffect(() => {
    getData(currentUser).then(res => {
      console.log(res);
      setFriends(res.friends)
      setAccount(res.account)
    })

  }, [])
  // 006e69d3-85d5-43fc-b867-3fc940e9dfcc



  const onSubmit: SubmitHandler<formData> = async (data) => {
    const friend: User = friends.filter(friend => data.receiverPhone == friend.phone_number)[0]

    const idIncome = createTransferId()
    const idOutcome = createTransferId()

    // INCOME
    await setDoc(doc(db, 'transactions', idIncome), {
      amount: Number(data.amount),
      receiver_name: data.receiverName,
      date: new Date().toJSON(),
      category: 'Income',
      origin_account: account.iban,
      type: 1,
      user_uid: friend.id
    })

    // OUTCOME
    await setDoc(doc(db, 'transactions', idOutcome), {
      amount: Number(data.amount),
      receiver_name: data.receiverName,
      date: new Date().toJSON(),
      category: 'Others',
      origin_account: account.iban,
      type: 0,
      user_uid: currentUser.id
    })

    await updateDoc(doc(db, 'users', friend.id), {
      transactions: arrayUnion(idIncome)
    })

    await updateDoc(doc(db, 'users', currentUser.id), {
      transactions: arrayUnion(idOutcome)
    })

    changeAccountValues(account, friend, Number(data.amount))
    reset()

  }

  const handleClick = () => {
    
  }

  return (
    <>
      <Header arrow={true} content={"Bizum"} url='/home' />
      <div className="flex flex-col gap-4 mt-10">
        <p className="text-white-form text-xl font-medium">From</p>
        <div className="bg-light-blue w-full flex flex-col gap-1 py-5 rounded-[20px] items-center">
          <p className="text-white-faded text-lg font-medium">Account</p>
          <p className="text-gray-card text-lg font-medium">{account.iban}</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-12">
        <p className="text-white-form text-xl font-medium">To</p>
        <div className="flex gap-5 items-center justify-start mb-7">
          <article className="w-14 h-14 rounded-full bg-[#DBE3F8] flex items-center justify-center self-start">+</article>
          {
            friends.map((friend) => {
              return <div onClick={handleClick} className="flex flex-col items-center">
                <img src={friend.profile_picture} className={`w-14 h-14 rounded-full bg-white`} />
                <p className="font-medium text-xs text-white-form">{friend.first_name}</p>
              </div>
            })
          }

        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} action="" className="flex flex-col gap-8 mt-10">
        <div className="flex flex-col border-b border-[#626262]">
          <label className="font-medium text-lg text-white-form" htmlFor="account">Receiver Phone</label>
          <input {...register('receiverPhone', { required: true, pattern :/ \(?(\d{3})\)?[-\.\s]?(\d{3})[-\.\s]?(\d{4}) /g})}
            className="py-2 bg-transparent text-white font-medium text-xl focus:outline-none" type="text" placeholder={placeholder.receiverPhone} />
        </div>
        <div className="flex flex-col border-b border-[#626262]">
          <label className="font-medium text-lg text-white-form" htmlFor="name">Receiver Name</label>
          <input {...register('receiverName', { required: true, pattern: /^[A-Za-z]+$/ })}
            className="py-2 bg-transparent text-white font-medium text-xl focus:outline-none" type="text" placeholder={placeholder.receiverName} />
        </div>
        <div className="flex flex-col border-b border-[#626262]">
          <label className="font-medium text-lg text-white-form" htmlFor="amount">Amount</label>
          <input {...register('amount', { required: true })}
            className="py-2 bg-transparent text-white font-medium text-xl focus:outline-none" type="text" />
        </div>
        <div className="flex flex-col border-b border-[#626262]">
          <label className="font-medium text-lg text-white-form" htmlFor="description">Description</label>
          <input {...register('description', { required: true })}
            className="py-2 bg-transparent text-white font-medium text-xl focus:outline-none" type="text" />
        </div>
        <input className="py-4 bg-[#414A61] flex items-center justify-center rounded-2xl text-white-faded" type="submit" value='Send' />
      </form>
    </>
  )
}