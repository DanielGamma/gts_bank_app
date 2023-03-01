import { createContext, useState } from "react";

interface userLogueado {
  id: number; 
  firstName: string;  
  lastName: string; 
  email: string; 
  password: string; 

} 

export const UsuarioContext = createContext({})

export function UserContext()  { 

    const [usuarioLogueado, setUsuarioLogueado] = useState<userLogueado>() 

  return (
    <div>
        <UsuarioContext.Provider value={{usuarioLogueado, setUsuarioLogueado}}>
            
        </UsuarioContext.Provider>

    </div>
  )
} 

