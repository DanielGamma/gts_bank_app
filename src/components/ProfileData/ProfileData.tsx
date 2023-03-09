import arrow from "../../assets/whitearrow.svg"
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { NavMenu } from "../NavMenu/NavMenu";
import { UserContext, corregir } from "../../context/UserProvider"
import { useContext, useState } from "react"
import { sendNewinfo } from "../../services/firebaseFunctions";

interface FormData {
  phone_number: string,
  first_name: string,
  last_name: string,
}

export const ProfileData: React.FC = (): JSX.Element => {

  const { register, handleSubmit, formState: { errors }, getValues } = useForm<FormData>({
    criteriaMode: "all"
  })

  const { currentUser, setCurrentUser } = useContext(UserContext) as corregir;

  // muestra y oculta el formulario
  const [showform, setShowform] = useState(false)
  const handleClick = () => {
    setShowform(prev => !prev)
  }

  const editUser = async (data: FormData) => {
    let { phone_number, first_name, last_name } = data

    if (phone_number == '') {
      data.phone_number = currentUser.phone_number
    }
    if (first_name == '') {
      data.first_name = currentUser.first_name
    }
    if (last_name == '') {
      data.last_name = currentUser.last_name
    }

    await sendNewinfo(currentUser, data);
    const holdPrev = {...currentUser}
    holdPrev.first_name = data.first_name
    holdPrev.last_name = data.last_name
    holdPrev.phone_number = data.phone_number

    setCurrentUser(holdPrev);
    setShowform(false)


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
          <h3 className="font-medium text-xl leading-[30px]">{currentUser.first_name}</h3>
        </div>
        <div>
          <p className="text-lg font-medium leading-9">Last Name</p>
          <h3 className="font-medium text-xl leading-[30px]">{currentUser.last_name}</h3>
        </div>
        <div>
          <p className="text-lg font-medium leading-9">Phone Number</p>
          <h3 className="font-medium text-xl leading-[30px]">{currentUser.phone_number}</h3>
        </div>
      </div>
      <h1 onClick={handleClick} className="text-white mt-12 mb-12 underline">Edit</h1>

      <form action="#" onSubmit={handleSubmit(editUser)} className={`text-white flex flex-col gap-2 pt-2 text-lg font-normal ${showform ? '' : 'hidden'}`}>

        <label htmlFor="">First Name</label>
        <input {...register("first_name", { required: false })} type="text" id="" className="bg-black " placeholder={currentUser ? currentUser.first_name : ""} />

        <hr />
        <label htmlFor="">Last Name</label>
        <input {...register("last_name", { required: false })} type="text" id="" className="bg-black" placeholder={currentUser ? currentUser.last_name : ""} />

        <hr />
        <label htmlFor="">Phone Number</label>
        <input {...register("phone_number", { required: false })} type="text" id="" className="bg-black" placeholder={currentUser ? currentUser.phone_number : ""} />

        <hr />
        <input type="submit" value="Save" name="" id="" className="bg-gray-dark w-[377px] h-[63px] rounded-2xl mt-4" />
      </form>
      < NavMenu />
    </>
  )
};
