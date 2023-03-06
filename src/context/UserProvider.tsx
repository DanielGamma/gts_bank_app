import { createContext, useEffect, useState } from "react"; 
import any from "react/jsx-runtime";
import { getUser } from "../services/firebaseFunctions";
import { User } from "../services/interfaces";


  export type corregir = { 
    currentUser: User, 
    setCurrentUser: (user: User) => void;  
  }


export const UserContext = createContext<corregir | null>(null); 


const UserProvider = ({children}:any) => { 

  const [currentUser, setCurrentUser] = useState<User>( 
    { 
      first_name: ".",
      last_name: ".",
      account: ".",
      profile_picture: ".",
      card: any,
      friends: [],
      gender: '',
      phone_number: '',
      transactions: [],
      email: "",
    } 
  )

  useEffect(() => {
    getUser("IOlHrqIY6Ze7CwbLaj0w5TepRvA3")
    .then(res=> setCurrentUser(res))
  }, [])

  return (
    <div>
      <UserContext.Provider value={{currentUser, setCurrentUser}}> 
        {children}
      </UserContext.Provider>
    </div>
  )
} 

export default UserProvider;
