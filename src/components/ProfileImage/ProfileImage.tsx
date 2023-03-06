import { importSpecifier } from "@babel/types"
import foto from "../../assets/picprofile.svg"
import arrow from "../../assets/whitearrow.svg"
import { NavMenu } from "../NavMenu/NavMenu"

type Props = {

}

export const ProfileImage: React.FC<Props> = (): JSX.Element => {
  return (
    <>
      <div className="flex text-white gap-36 pb-10">
        <img src={arrow} alt="" />
        <h1>Image</h1>
      </div>
      <div className="flex justify-center ">
        <img src={foto} alt="" />
      </div>

      <div className="text-white flex flex-col gap-2 pt-16">
        <h2 className="mb-6" >Change Image</h2>
        <h4>Image URL</h4>
        <p>https://etc</p>
        <hr />
        <div className="flex justify-center items-center mt-80">

        <button className="bg-gray-dark w-[377px] h-[63px] rounded-2xl">Upload</button>
        </div>
      </div>
      
    </>

  )
}