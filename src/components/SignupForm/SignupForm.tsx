import { useForm } from "react-hook-form";
import { Link } from "react-router-dom"
import {createUserWithEmailAndPassword} from "firebase/auth"
import { ErrorMessage } from '@hookform/error-message';
import { auth,db } from "../../config/firebase_config";
import { getDoc, doc,setDoc  } from "firebase/firestore";
import { useState } from "react";

type Props = {}

interface FormData{
    firstName:string;
    secondName:string;
    email:string;
    password:string;
    confirmPassword:string;
}

export const SignupForm: React.FC<Props> = (props):JSX.Element => {

    const {register,handleSubmit,formState: { errors },getValues}= useForm<FormData>({
        criteriaMode: "all"
      })

    const [ err, setErr] = useState<boolean>(false)

    const registerForm = handleSubmit(async(values) =>{

        setErr(false)
        const name : string = JSON.stringify(values.firstName.charAt(0).toUpperCase() + values.firstName.slice(1))

        const lastName : string = JSON.stringify(values.secondName.charAt(0).toUpperCase() + values.secondName.slice(1))

        const createIban = () => {

            const numbers = '0123456789'

            let result = 'ES'

            for (let i = 0; i < 22 ; i++){
                result += numbers[Math.floor(Math.random() * numbers.length)]
            }

            return result
        }

        await createUserWithEmailAndPassword(auth, values.email, values.password).then(async(userCredential:any) => {

            const userIban = createIban();

            await setDoc(doc(db,'users', userCredential.user.uid),{
                email:values.email,
                first_name:name,
                last_name:lastName,
                account:userIban
            })

            await setDoc(doc(db,'accounts',userIban),{
                balance:0,
                created_at: new Date(),
                iban:userIban,
                owner:userCredential.user.uid,
            })

        })
        .catch( err => {
            console.log(err);
            setErr(true)
        })

    })

    return (
        <>
        <Link to="/auth">
            <svg width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.336 22.6721L14 20.0081L5.34683 11.336L14 2.66396L11.336 -7.62939e-06L0 11.336L11.336 22.6721Z" fill="white"/>
            </svg>
        </Link>     

        <div className="pl-1 pt-5 flex flex-col gap-2">
            <p className="font-bold	text-white-faded text-4xl ont-['Karla']">Create Account</p>
            <p className="font-normal text-white-faded text-sm ">Open a BankMe account with a few details.</p>
        </div>

        <div className="mt-10">
            <form onSubmit={registerForm} className="flex flex-col gap-3">
                <label htmlFor="name" className="text-white-form text-lg">First Name</label>
                <input type="text" {...register("firstName",{required:true,pattern: {value:/^[A-Za-z]+$/ , message: "User name invalid."},})}  className="bg-transparent border-b-[1px] border-solid border-[#626262] focus:outline-none !important text-white pb-2 text-lg" />


                <label htmlFor="last-name" className="text-white-form text-lg">Last Name</label>
                <input type="text" {...register('secondName',{required:true,pattern: {value:/^[A-Za-z]+$/ , message: "User name invalid."},})}   className="bg-transparent border-b-[1px] border-solid border-[#626262] focus:outline-none !important text-white pb-2 text-lg" />


                <label htmlFor="email" className="text-white-form text-lg">Email</label>
                <input type="email" {...register('email',{required:true})}   className="bg-transparent border-b-[1px] border-solid border-[#626262] focus:outline-none !important text-white pb-2 text-lg" />


                <label htmlFor="password" className="text-white-form text-lg">Password</label>
                <input type="password" {...register('password',{required:true,pattern:{value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/, message:"Invalid password"},})}  className="bg-transparent border-b-[1px] border-solid border-[#626262] focus:outline-none !important text-white pb-2 text-lg"/>


                <label htmlFor="password" className="text-white-form text-lg">Repeat Password</label>
                <input type="password" {...register('confirmPassword',{required:true,validate:(value => value === getValues("password") || "Passwords don't match")})}   className="bg-transparent border-b-[1px] border-solid border-[#626262] focus:outline-none !important text-white pb-2 text-lg"/>


                <ErrorMessage errors={errors} name="firstName" render={({ messages }) => messages && Object.entries(messages).map(([type, message]) => ( <p className="text-red-700" key={type}>{message}</p>))}/>
                
                <ErrorMessage errors={errors} name="secondName" render={({ messages }) => messages && Object.entries(messages).map(([type, message]) => ( <p className="text-red-700" key={type}>{message}</p>))}/>

                <ErrorMessage errors={errors} name="password" render={({ messages }) => messages && Object.entries(messages).map(([type, message]) => ( <p className="text-red-700" key={type}>{message}</p>))}/>

                {
                errors.confirmPassword && <p className="text-red-700">{errors.confirmPassword.message}</p>
                }

                {
                    err? <p className="text-red-700">Email already exist</p> : ''
                }

                <button type="submit" className="bg-gray-dark rounded-xl w-full flex justify-center items-center px-6 py-2 mt-12">
                    <p className="text-base not-italic font-medium text-white text-center">CREATE YOUR ACCOUNT</p>
                </button>

            </form>
        </div>

        <p className="text-white text-sm mt-5">Do you already have a BankMe account? <span className="text-blue-link"><Link to="/auth/signin">Sign in here</Link></span></p>

        </>
  )
}