import { NavMenu } from "../NavMenu/NavMenu"

type Props = {}

export const TransactionFailure: React.FC<Props> = (props):JSX.Element => {
  return (
    <>
    <div className="relative h-[80vh] flex flex-col">
        <div className="absolute top-40  flex flex-col gap-7 items-center">

          <div className="relative bottom-5 w-28 h-28  border-2 border-[#FF647C] rounded-full flex justify-center items-center ">
            
            <div className="h-11 w-[2px] bg-[#FF647C] rotate-45"></div>
            <div className="h-11 w-[2px] bg-[#FF647C] -rotate-45"></div>
           
          </div>

          <p className="font-bold text-4xl text-white-faded text-center w-2/3">Something went wrong!</p>
          <p className="font-light text-2xl text-white-faded opacity-70 text-center">We were unable to complete the operation. Please, try again later</p>
        </div>

        <button className="bg-gray-dark py-4 w-full absolute bottom-0 text-white-faded rounded-2xl">Continue</button>

      </div>
      <NavMenu />
    </>
  )
}