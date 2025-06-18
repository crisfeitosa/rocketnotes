
import { AxiosError } from "axios";
import { AuthContext } from "../hooks/useAuth";
import { api } from "../services/api";
import { useState } from "react";

interface AuthProviderProps {
  children: React.ReactNode;
}

interface SignInData {
  email: string;
  password: string;
}

export  interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

interface AuthData {
  user: User;
  token: string;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState({} as AuthData);

  async function signIn({ email, password }: SignInData) {
    try {
      const response = await api.post('/sessions', { email, password });
      const { user, token } = response.data;

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({ user, token });

      console.log("Response", user, token);

    } catch (error) {
      if (error instanceof AxiosError) {
        alert(error.response?.data.message)
      } else {
        alert("Não foi possível entrar.")
      }
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, user: data.user }}>
      {children}
    </AuthContext.Provider>
  )
}