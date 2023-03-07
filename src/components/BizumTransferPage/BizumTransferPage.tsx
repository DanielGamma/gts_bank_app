import { Header } from "../Header/Header"
import { useForm, SubmitHandler } from "react-hook-form";
import { formData, User } from "../../services/interfaces";
import { useContext, useEffect, useState } from "react";
import { corregir, UserContext } from "../../context/UserProvider";
import { setDoc, doc, getDocs, query, collection, where, getDoc } from "@firebase/firestore";
import { db } from "../../config/firebase_config";
import { createTransferId } from "../../services/utilityFunctions";
import { getAccount } from "../../services/firebaseFunctions";

type Props = {}




export const BizumTransferPage: React.FC<Props> = (props): JSX.Element => {


  const { register, handleSubmit, watch, formState: { errors } } = useForm<formData>();
  const { currentUser } = useContext(UserContext) as corregir
  const [friends, setFriends] = useState<User[]>([])

  const getFriends = async (friendsList: string[]) => {
    return Promise.all(friendsList.map((id) => getDoc(doc(db, 'users', id)).then(res => res.data() as User)))
  }

  useEffect(() => {
    getFriends(currentUser.friends).then(res => {
      console.log(res);
      setFriends(res)

    })

  }, [])
  // 006e69d3-85d5-43fc-b867-3fc940e9dfcc
  const onSubmit: SubmitHandler<formData> = async (data) => {
    const id = createTransferId()
    const account = await getAccount(currentUser.id)
    await setDoc(doc(db, 'transactions', id), {
      amount: data.amount,
      receiver_name: data.receiverName,
      date: new Date().toJSON(),
      category: 'income',
      origin_account: account.iban,
      type: 1,
      user_uid: currentUser.id
    })

  }

  const handleClick = () => {
    
  }

  return (
    <>
      <Header arrow={true} content={"Bizum"} url='/home'/>
      <div className="flex flex-col gap-4 mt-10">
        <p className="text-white-form text-xl font-medium">From</p>
        <div className="bg-light-blue w-full flex flex-col gap-1 py-5 rounded-[20px] items-center">
          <p className="text-white-faded text-lg font-medium">Account</p>
          <p className="text-gray-card text-lg font-medium">ES5421008783867371671186</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-12">
        <p className="text-white-form text-xl font-medium">To</p>
        <div className="flex gap-5 items-center justify-start mb-7">
          <article className="w-14 h-14 rounded-full bg-[#DBE3F8] flex items-center justify-center self-start">+</article>
          <div className="flex flex-col items-center gap-2">
            <article className={`w-14 h-14 rounded-full bg-white`}></article>
            <p className="font-medium text-xs text-white-form">Rafaella</p>
          </div>
          {
            friends.map((friend) => {
              return <div onClick={handleClick} className="flex flex-col items-center">
                <article className={`w-14 h-14 rounded-full bg-white`}></article>
                <p className="font-medium text-xs text-white-form">Rafaella</p>
              </div>
            })
          }

        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} action="" className="flex flex-col gap-8 mt-10">
        <div className="flex flex-col border-b border-[#626262]">
          <label className="font-medium text-lg text-white-form" htmlFor="account">Receiver Phone</label>
          <input {...register('receiverPhone', { required: true })}
            className="py-2 bg-transparent text-white font-medium text-xl focus:outline-none" type="text" />
        </div>
        <div className="flex flex-col border-b border-[#626262]">
          <label className="font-medium text-lg text-white-form" htmlFor="name">Receiver Name</label>
          <input {...register('receiverName', { required: true })}
            className="py-2 bg-transparent text-white font-medium text-xl focus:outline-none" type="text" />
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