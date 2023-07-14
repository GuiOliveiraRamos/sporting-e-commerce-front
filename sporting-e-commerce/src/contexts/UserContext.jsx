import { createContext, useState } from "react"

export const UserContext = createContext();

export default function UserProvider({children}) {
  const localUser = localStorage.getItem("token")
  console.log(localUser)
  const [user, setUser] = useState(localUser);

  const UserContext = createContext();

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  )
}

export const LoggedContext = createContext();
