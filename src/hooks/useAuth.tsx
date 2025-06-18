import { useContext, createContext } from "react";
import { User } from "../providers/auth";

interface SignInData {
  email: string;
  password: string;
}

export interface AuthContextData {
  signIn: (data: SignInData) => Promise<void>;
  signOut: () => void;
  updateProfile: (user: UserUpdate) => Promise<void>;
  user?: User;
}

export interface UserUpdate extends User {
  password?: string;
  old_password?: string;
}

export const AuthContext = createContext({} as AuthContextData);

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}