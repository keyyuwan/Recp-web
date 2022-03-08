import { createContext, ReactNode, useEffect } from "react"
import { useSession } from "next-auth/react"
import { api } from "../services/api"

interface AuthProviderProps {
  children: ReactNode
}

const AuthContext = createContext({})

export function AuthProvider({ children }: AuthProviderProps) {
  const { data: session } = useSession()

  useEffect(() => {
    if (!!session) {
      api.defaults.headers.common["email"] = session.user.email
    }
  }, [session])

  return (
    <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>
  )
}
