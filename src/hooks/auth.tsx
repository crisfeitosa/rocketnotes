import { createContext, useContext } from "react";

const AuthContext = createContext({});

interface AuthProviderProps {
  children: React.ReactNode;
}

function AuthProvider({ children }: AuthProviderProps) {
  return (
    <AuthContext.Provider value={{ name: "Cristiano ", email: 'cris@teste.com' }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };