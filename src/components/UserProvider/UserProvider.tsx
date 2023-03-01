import { createContext, useState } from "react";

interface User { 
  user_id: number; 
  account_iban: string; 
  card: object; 
  email: string; 
  firstName: string;  
  lastName: string; 
  gender: string; 
  phone: number; 
  profile_picture: string; 
  friends: number[]; 
  transactions: number[]; 
  password: string; 
  
} 

export const userContext = createContext({})

export function UserProvider()  { 

    const [currentUser, setCurrentUser] = useState<User>() 

  return (
    <div>
        <userContext.Provider value={{currentUser, setCurrentUser}}>
            
        </userContext.Provider>

    </div>
  )
} 

