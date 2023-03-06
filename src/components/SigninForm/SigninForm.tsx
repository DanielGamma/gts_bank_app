import { useContext, useState } from "react"
import {auth} from '../../config/firebase_config'
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {corregir, UserContext} from '../../context/UserProvider' 
import vector from '../../assets/Vector.png' 
import {getUser} from '../../services/firebaseFunctions'

type Props = {} 


export const SigninForm: React.FC<Props> = (props):JSX.Element => {  

  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const [error, setError] = useState<boolean>(false) 
  const { setCurrentUser } = useContext(UserContext) as corregir; 

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
   
  signInWithEmailAndPassword(auth, email, password) 
  .then(async(userCredential) => {  
    const saveInfo = await getUser(userCredential.user.uid) 
    setCurrentUser(saveInfo) 
    navigate("/")
    
  })
  .catch(() => { 
    setError(true) 
    console.log("Invalid username or password")
  }); 

}

    return (
    <> 
    <div className='bg-[#000000] px-7 font-Karla text-white'>  
    
      <img className="pt-16 pl-7 "
        src={vector} alt="vect" />
      <section className='pb-28'> 
        <h1 className="text-4xl text-[#F9F9F9] font-normal pt-12">Sign into your Account</h1> 
        <p className="pt-6 font-thin text-xs text-[#F9F9F9]">Log into your GTS Bank account</p>
      </section>  

      <form onSubmit={handleSubmit} 
        action="" className='text-[#EEEEEE] flex flex-col font-medium text-lg'> 
        <label className='pt-3 pb-4' 
          htmlFor="" >Email</label> 
        <input onChange={e=> setEmail(e.target.value)}
          className='border-b-4 border-[#626262] bg-black' 
          type="text" id="email" placeholder="   rfordham4@ning.com" name="email"/> 

        <label className='pt-7 pb-4' 
          htmlFor="">Password</label> 
        <input onChange={e=> setPassword(e.target.value)}
          className='border-b-4 border-[#626262] bg-black'
          type="text" placeholder="   **********" name="password" id="password"/> 

        <p className="font-thin pt-9 text-xs text-[#F9F9F9]">Have you forgotten your password?, </p> 
        <p className="font-light text-sm text-[#0066F6] pb-24">click here to recover it</p>

        
        {error ? "" : <p>Invalid username or password</p>} 

        <button disabled={email === "" && password === "" ? true : false}
        className= "bg-[#414A61] rounded-2xl py-1.5 font-medium text-base">LOG IN</button> 

        <p className='pt-4 pb-9 font-thin text-xs text-[#F9F9F9]'>Do you not have a BankMe account? <span className='text-[#0066F6]'>Sign in here</span> </p>
      </form>
    </div>
   </>
  )
}