
import { AxiosError } from "axios";
import { AuthContext, UserUpdate } from "../hooks/useAuth";
import { api } from "../services/api";
import { useEffect, useState } from "react";

interface AuthProviderProps {
  children: React.ReactNode;
}

interface SignInData {
  email: string;
  password: string;
}

export interface User {
  name?: string;
  email?: string;
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

      localStorage.setItem('@rocketnotes:user', JSON.stringify(user));
      localStorage.setItem('@rocketnotes:token', token);

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({ user, token });
    } catch (error) {
      if (error instanceof AxiosError) {
        alert(error.response?.data.message)
      } else {
        alert("Não foi possível entrar.")
      }
    }
  }

  async function updateProfile({ user, avatarFile }: { user: UserUpdate; avatarFile?: File }) {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append('avatar', avatarFile);

        const response = await api.patch('/users/avatar', fileUploadForm);
        user.avatar = response.data.avatar;
      }

      await api.put('/users', user);
      localStorage.setItem('@rocketnotes:user', JSON.stringify(user));

      setData({ token: data.token, user });
      alert("Perfil atualizado!");
    } catch (error) {
      if (error instanceof AxiosError) {
        alert(error.response?.data.message)
      } else {
        alert("Não foi possível atualizar o perfil.")
      }
    }
  }

  function signOut() {
    localStorage.removeItem('@rocketnotes:user');
    localStorage.removeItem('@rocketnotes:token');

    setData({} as AuthData);
  }

  useEffect(() => {
    const user = localStorage.getItem('@rocketnotes:user');
    const token = localStorage.getItem('@rocketnotes:token');

    if (user && token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({ token, user: JSON.parse(user)});
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, user: data.user, signOut, updateProfile }}>
      {children}
    </AuthContext.Provider>
  )
}