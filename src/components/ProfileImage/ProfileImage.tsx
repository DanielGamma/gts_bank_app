import { importSpecifier } from "@babel/types"
import { useState } from "react"
import foto from "../../assets/picprofile.svg"
import arrow from "../../assets/whitearrow.svg"
import { Link } from "react-router-dom"

type Props = {

}

export const ProfileImage: React.FC<Props> = (): JSX.Element => {


  const [show, setShow] = useState(false)

  const handleClick = () => {
    setShow(prev => !prev)
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
      <form action="" className={`text-white flex flex-col gap-4 pt-16 font-normal ${show ? '' : 'hidden'}`} >
        <label htmlFor="">Image URL</label>
        <input type="text" className="bg-black " />
        <hr />
        <input type="submit" name="" value="Upload" id="" className="bg-gray-dark w-[377px] h-[63px] rounded-2xl mt-64" />
      </form>

    </>

  )
}