import { Link } from "react-router-dom";

type Props = {};

export const LoginPage: React.FC<Props> = (props): JSX.Element => {
  return ( 
    <div className="flex flex-col justify-end gap-10 items-center h-[80vh] "> 
      <div className="flex flex-col gap-5 items-self-center ">
            <p className=" text-center font-['Karla'] not-italic font-bold text-3xl text-white-faded">Welcome to GTS Bank</p>
            <p className=" text-center font-light font-['Karla'] not-italic text-2xl text-white-faded">The bank for everyone.</p>
      </div>
      <div className="flex flex-col gap-5 ">
        <div className="bg-gray-dark rounded-xl flex justify-center items-center px-6 py-2">
            <Link to="/auth/signup"><p className="text-base not-italic font-medium text-white text-center">CREATE YOUR FREE ACCOUNT</p></Link>
        </div>
        <div className="bg-white rounded-xl justify-center items-center px-6 py-2">
            <Link to="/auth/signin"><p className="text-dark-blue text-base not-italic font-medium text-center">LOG INTO YOUR ACCOUNT</p></Link>
        </div>
      </div>
    </div>
  )
}
