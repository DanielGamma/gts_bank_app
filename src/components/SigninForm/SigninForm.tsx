import { useState } from "react"
import {auth} from '../../config/firebase_config'
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

type Props = {}

export const SigninForm: React.FC<Props> = (props):JSX.Element => {  

  const navigate = useNavigate()
  // const [signIn, setSignIn] = useState(); 
  const [email] = useState('');
  const [password] = useState('');
  //  auth = getAuth(); 
  signInWithEmailAndPassword(auth, email, password) 
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    navigate('/')
    console.log(user);
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message; 
    console.log("Invalid username or password", errorCode, errorMessage)
  });

    return (
    <div className='bg-[red]'><p className='text-white'>hdsgasdfgsaola</p></div>
  )
}