import arrow from "../../assets/whitearrow.svg"
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { NavMenu } from "../NavMenu/NavMenu";
import { UserContext, corregir } from "../../context/UserProvider"
import { useContext, useState } from "react"

type Props = {};

interface FormData {
  img: string,
  profilepic: string,
}


export const ProfileData: React.FC<Props> = (props): JSX.Element => {

  const { register, handleSubmit, formState: { errors }, getValues } = useForm<FormData>({
    criteriaMode: "all"
  })

  const { currentUser, setCurrentUser } = useContext(UserContext) as corregir;


  // muestra y oculta el formulario
  const [showform, setShowform] = useState(false)
  const handleClick = () => {
    setShowform(prev => !prev)
  }
  const editUser = (e: any, data: any) => {
    e.preventDefault()
    console.log(data);
  }


  return (
    <>
      <Link to="/profile">
        <div className="flex text-white gap-36 pb-8">
          <img src={arrow} alt="" />
          <h1 >Personal Data</h1>
        </div>
      </Link>
      <div className="flex flex-col text-white gap-8 ">
        <div>
          <p className="text-lg font-medium leading-9">First Name</p>
          <h3 className="font-medium text-xl leading-[30px]">Andrey</h3>
        </div>
        <div>
          <p className="text-lg font-medium leading-9">Last Name</p>
          <h3 className="font-medium text-xl leading-[30px]">Utley</h3>
        </div>
        <div>
          <p className="text-lg font-medium leading-9">Phone Number</p>
          <h3 className="font-medium text-xl leading-[30px]">666 555 999</h3>
        </div>
      </div>
      <h1 onClick={handleClick} className="text-white mt-12 mb-12">Edit</h1>

      <form onSubmit={handleSubmit(editUser)} className={`text-white flex flex-col gap-2 pt-2 text-lg font-normal ${showform ? '' : 'hidden'}`}>

        <label htmlFor="">First Name</label>
        <input {...register("img", { required: true })} type="text" name="" id="" className="bg-black" placeholder={currentUser ? currentUser.first_name : ""} />
        <hr />
        <label htmlFor="">Last Name</label>
        <input {...register("img", { required: true })} type="text" name="" id="" className="bg-black" placeholder={currentUser ? currentUser.last_name : ""} />
        <hr />
        <label htmlFor="">Phone Number</label>
        <input {...register("img", { required: true })} type="text" name="" id="" className="bg-black" placeholder={currentUser ? currentUser.last_name : ""} />
        <hr />
        <input type="submit" value="Save" name="" id="" className="bg-gray-dark w-[377px] h-[63px] rounded-2xl mt-4" />
      </form>
      < NavMenu />
    </>
  )
};
