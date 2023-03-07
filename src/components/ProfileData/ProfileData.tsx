import arrow from "../../assets/whitearrow.svg"
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

type Props = {};

export const ProfileData: React.FC<Props> = (props): JSX.Element => {

  const {register,handleSubmit,formState: { errors },getValues}= useForm<FormData>({
    criteriaMode: "all"
  })

  return (
    <>
    <Link to="/profile">
      <div className="flex text-white gap-36 pb-8">
        <img src={arrow} alt="" />
        <h1>Personal Data</h1>
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
      <h1 className="text-white mt-12 mb-12">Edit</h1>

<form action="" className="text-white flex flex-col gap-2 text-lg">
   <label htmlFor="">First Name</label>
   <input type="text"  name="" id="" className="bg-black" />
   <hr />
   <label htmlFor="">Last Name</label>
   <input type="text" name="" id="" className="bg-black"/>
   <hr />
   <label htmlFor="">Phone Number</label>
   <input type="text" name="" id="" className="bg-black" />
   <hr />
   <input type="submit" value="Save" name="" id="" className="bg-gray-dark w-[377px] h-[63px] rounded-2xl mt-4" />
</form>
    </>
  )
};
