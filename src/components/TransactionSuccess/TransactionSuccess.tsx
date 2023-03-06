import { NavMenu } from "../NavMenu/NavMenu"
import {AiOutlineCheckCircle} from "react-icons/ai"

type Props = {}

export const TransactionSuccess: React.FC<Props> = (props): JSX.Element => {
  return (
    <>
      <div className="relative h-[80vh] flex flex-col">
        <div className="absolute top-40  flex flex-col gap-7 items-center">

          <div className="relative bottom-5 w-28 h-28  border-2 border-[#16BE81] rounded-full flex justify-center ">
            
            <div className="relative flex justify-center bg-black h-20 w-14 rotate-45 left-8 bottom-1 ">
              <div className=" h-full w-[2px]  bg-[#16BE81]"></div>
              <div className="absolute h-[2px] bottom-0 bg-[#16BE81] w-1/2 left-0"></div>
            </div>
           
          </div>

          <p className="font-bold text-4xl text-white-faded">Success!</p>
          <p className="font-light text-2xl text-white-faded opacity-70 text-center">The operation has been successfully completed</p>
        </div>

        <button className="bg-gray-dark py-4 w-full absolute bottom-0 text-white-faded rounded-2xl">Continue</button>

      </div>
      <NavMenu />
    </>
  )
}