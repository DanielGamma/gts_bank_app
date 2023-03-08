import { NavMenu } from "../NavMenu/NavMenu"
import { AiOutlineCheckCircle } from "react-icons/ai"

type Props = {
  text0: string,
  text1: string,
}

export const TransactionSuccess: React.FC<Props> = ({ text0, text1 }): JSX.Element => {



  
  return (
    <>
      <div className="relative bottom-5 w-28 h-28  border-2 border-[#16BE81] rounded-full flex justify-center ">

        <div className="relative flex justify-center bg-black h-20 w-14 rotate-45 left-8 bottom-1 ">
          <div className=" h-full w-[2px]  bg-[#16BE81]"></div>
          <div className="absolute h-[2px] bottom-0 bg-[#16BE81] w-1/2 left-0"></div>
        </div>

      </div>

      <p className="font-bold text-4xl text-white-faded">{text0}</p>
      <p className="font-light text-2xl text-white-faded opacity-70 text-center">{text1}</p>
      {/* ----------- */}
    </>
  )
}