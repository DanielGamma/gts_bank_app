import { Header } from "../Header/Header"
import { useContext } from "react"
import { corregir, UserContext } from "../../context/UserProvider"
import { useForm } from "react-hook-form";
import { formData } from "../../services/interfaces";


type Props = {}



export const TransferPage: React.FC<Props> = (props): JSX.Element => {

  const { currentUser } = useContext(UserContext) as corregir

  return (
    <>
      <Header arrow={true} content="Transfer" />
      <div className="flex flex-col gap-4 mt-10">
        <p className="text-white-form text-xl font-medium">From</p>
        <div className="bg-light-blue w-full flex flex-col gap-1 py-5 rounded-[20px] items-center">
          <p className="text-white-faded text-lg font-medium">Account</p>
          <p className="text-gray-card text-lg font-medium">ES5421008783867371671186</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-12">
        <p className="text-white-form text-xl font-medium">To</p>
        <div className="flex gap-5 items-center justify-start mb-16">
          <article className="w-14 h-14 rounded-full bg-[#DBE3F8] flex items-center justify-center">+</article>
          <article className="w-14 h-14 rounded-full bg-light-blue"></article>
          <article className="w-14 h-14 rounded-full bg-light-blue"></article>
          <article className="w-14 h-14 rounded-full bg-light-blue"></article>
        </div>
      </div>
      <form  action="" className="flex flex-col gap-8 mt-10">
        <div className="flex flex-col border-b border-[#626262]">
          <label className="font-medium text-lg text-white-form" htmlFor="account">Receiver Account</label>
          <input className="py-2 bg-transparent text-white font-medium text-xl focus:outline-none   " type="text" id="name" name="account" />
        </div>
        <div className="flex flex-col border-b border-[#626262]">
          <label className="font-medium text-lg text-white-form" htmlFor="name">Receiver Name</label>
          <input className="py-2 bg-transparent text-white font-medium text-xl focus:outline-none " type="text" id="name" name="name" />
        </div>
        <div className="flex flex-col border-b border-[#626262]">
          <label className="font-medium text-lg text-white-form" htmlFor="amount">Amount</label>
          <input className="py-2 bg-transparent text-white font-medium text-xl focus:outline-none " type="text" id="amount" name="amount" />
        </div>
        <div className="flex flex-col border-b border-[#626262]">
          <label className="font-medium text-lg text-white-form" htmlFor="description">Description</label>
          <input className="py-2 bg-transparent text-white font-medium text-xl focus:outline-none " type="text" id="description" name="description" />
        </div>
        <input className="py-4 bg-[#414A61] flex items-center justify-center rounded-2xl text-white-faded" type="submit" value='Send' />
      </form>
    </>
  )
}