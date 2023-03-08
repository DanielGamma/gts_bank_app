import { NavMenu } from "../NavMenu/NavMenu"

type Props = {
  text0: string,
  text1: string
}

export const TransactionFailure: React.FC<Props> = ({ text0, text1 }): JSX.Element => {
  return (
    <>

      <div className="relative bottom-5 w-28 h-28  border-2 border-[#FF647C] rounded-full flex justify-center items-center ">

        <div className="h-11 w-[2px] bg-[#FF647C] rotate-45"></div>
        <div className="h-11 w-[2px] bg-[#FF647C] -rotate-45"></div>

      </div>

      <p className="font-bold text-4xl text-white-faded text-center w-2/3">{text0}</p>
      <p className="font-light text-2xl text-white-faded opacity-70 text-center">{text1}</p>
      {/* ----------- */}

    </>
  )
}