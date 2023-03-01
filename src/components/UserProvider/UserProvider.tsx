import { createContext, useState } from "react";

interface userLogueado { 
  firstName: string;  
  lastName: string; 
  email: string; 
  password: string; 
  id: number;

} 

export const userContext = createContext({})

export function UserProvider()  { 

    const [currentUser, setCurrentUser] = useState<userLogueado>() 

  return (
    <div>
        <userContext.Provider value={{currentUser, setCurrentUser}}>
            
        </userContext.Provider>

    </div>
  )
} 

