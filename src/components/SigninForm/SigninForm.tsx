import { useContext, useState } from "react"
import {auth} from '../../config/firebase_config'
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {userContext} from '../../context/UserProvider'

type Props = {}

export const SigninForm: React.FC<Props> = (props):JSX.Element => {  

  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const { currentUser, setCurrentUser} = useContext(userContext)
  const [error, setError] = useState('')

  //  auth = getAuth(); 
  signInWithEmailAndPassword(auth, email, password) 
  
  .then((userCredential) => {
    // Signed in
    const user = setCurrentUser(userCredential.user);
    navigate('/')
    console.log(user);
    
  })
  .catch((error) => { 
    setError("Invalid username or password")
    const errorCode = error.code;
    const errorMessage = error.message; 
    console.log("Invalid username or password", errorCode, errorMessage)
  });

    return (
    <div className='bg-[red]'><p className='text-white'>hdsgasdfgsaola</p></div>
  )
}