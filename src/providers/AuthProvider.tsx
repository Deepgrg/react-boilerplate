import { IUserInfo } from '@/core/public/Login/schema/login.interface'
import React, { FC, useContext, useEffect, useMemo } from 'react'

const AuthContext = React.createContext<AuthProps>({
  userData: null,
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  setUserData: () => {},
})

interface AuthProps {
  userData: IUserInfo | null
  isAuthenticated: boolean
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
  setUserData: React.Dispatch<React.SetStateAction<IUserInfo | null>>
}

const AuthProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userData, setUserData] = React.useState<IUserInfo | null>(null)
  const [isAuthenticated, setIsAuthenticated] = React.useState(true)

  useEffect(() => {
    // const storageData = TokenService.getStorageData()
    // setIsAuthenticated(!!storageData?.accessToken)
    // if (storageData?.user) setUserData(storageData?.user)
  }, [])

  const providerValue = useMemo(
    () => ({ userData, isAuthenticated, setIsAuthenticated, setUserData }),
    [userData, isAuthenticated]
  )

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}

export default AuthProvider
