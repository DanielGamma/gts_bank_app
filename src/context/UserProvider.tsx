import { createContext, useState } from "react"; 


   interface Card { 
    card_number: number; 
    card_formatted: string; 
    cvc: number; 
    expiration_date: string; 
    service: string; 
  }

  interface User { 
    user_id: string; 
    account_iban: string; 
    card: Card; 
    email: string; 
    firstName: string;  
    lastName: string; 
    gender: string; 
    phone: number; 
    profile_picture: string; 
    friends: string[]; 
    transactions: string[]; 
  }  



export const UserContext = createContext({})



export default function UserProvider({children}: any) { 

  const [currentUser, setCurrentUser] = useState<User>() 



  return (
    <div>
        <UserContext.Provider value={{currentUser, setCurrentUser}}> 
          {children}
        </UserContext.Provider>

    </div>
  )
} 

