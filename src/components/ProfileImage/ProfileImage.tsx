import { importSpecifier } from "@babel/types"
import { useContext, useState } from "react"
import foto from "../../assets/picprofile.svg"
import arrow from "../../assets/whitearrow.svg"
import { Link } from "react-router-dom"
import { NavMenu } from "../NavMenu/NavMenu"
import { UserContext, corregir } from "../../context/UserProvider"
import { useForm } from "react-hook-form"




type Props = {
  
}

interface FormData{
  img: string,
  
}

export const ProfileImage: React.FC<Props> = (props): JSX.Element => {

  const { register, handleSubmit, formState: { errors }, getValues } = useForm<FormData>({
    criteriaMode: "all"
  })

  const { currentUser  } = useContext(UserContext) as corregir;

  //estado para ocultar y mostrar el formulario
  const [show, setShow] = useState(false)
  const handleClick = () => {
    setShow(prev => !prev)
  }

 
   const onSubmit = (e: any, data: any)=> {
    e.preventDefault()
   }

  return (
    <>
      <Link to="/profile">
        <div className="flex text-white gap-36 pb-10">
          <img src={arrow} alt="" />
          <h1>Image</h1>
        </div>
      </Link>
      <div className="flex justify-center ">
        <img src={foto} alt="" />
      </div>
      <h1 onClick={handleClick} className="text-white mt-24">Change Image</h1>

      <form onSubmit={handleSubmit(onSubmit)} className={`text-white flex flex-col gap-4 pt-16 font-normal ${show ? '' : 'hidden'}`} >
        <label htmlFor="">Image URL</label>
        <input {...register("img",{required: true})} type="text" className="bg-black " placeholder={currentUser ? currentUser.profile_picture : ""} />
        
        <hr />
        <input type="submit" name="" value="Upload" id="" className="bg-gray-dark w-[377px] h-[63px] rounded-2xl mt-64" />
      </form>
      <NavMenu />
    </>

  )
}