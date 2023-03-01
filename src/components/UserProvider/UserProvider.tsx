import { createContext, useState } from "react";

interface User { 
  firstName: string;  
  lastName: string; 
  email: string; 
  password: string; 
  id: number;

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

