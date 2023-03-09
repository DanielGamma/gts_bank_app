import { useContext } from "react"
import { UserContext } from "../../context/UserProvider"
import { Header } from "../Header/Header"
import { corregir } from "../../context/UserProvider"

export const CardDetails: React.FC = (): JSX.Element => {

  const { currentUser } = useContext(UserContext) as corregir;  

  return (
    <>
      <Header arrow={true} content='Details' url='/cards'/>
      <div className="flex flex-col gap-3 mt-10">
        <p className="font-medium text-lg text-white-form">Related Account</p>
        <p className="font-medium text-xl text-white">{currentUser.account}</p>
      </div>
      <div className="flex flex-col gap-3 mt-10">
        <p className="font-medium text-lg text-white-form">Card number</p>
        <p className="font-medium text-xl text-white">{currentUser.card.card}</p>
      </div>
      <div className="flex flex-col gap-3 mt-10">
        <p className="font-medium text-lg text-white-form">Expiration date</p>
        <p className="font-medium text-xl text-white">{currentUser.card.expiration_date}</p>
      </div>
      <div className="flex flex-col gap-3 mt-10">
        <p className="font-medium text-lg text-white-form">Service</p>
        <p className="font-medium text-xl text-white">{currentUser.card.service}</p>
      </div>
    </>
  )
}