import { useState } from 'react';
import { Link } from 'react-router-dom';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';

import { api } from '../../services/api';
import { useAuth } from '../../hooks/useAuth';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Avatar } from "./styles";

export function Profile() {
  const { user, updateProfile } = useAuth();
  const avatarUrl = user?.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [passwordOld, setPasswordOld] = useState('');
  const [passwordNew, setPasswordNew] = useState('');

  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);

  async function handleUpdate() {
    const user = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld
    }

    await updateProfile({ user, avatarFile: avatarFile ?? undefined });
  }

  function handleChangeAvatar(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) {
      return;
    }

    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
        </Link>
      </header>

      <Form>
        <Avatar>
          <img
            src={avatar}
            alt={`Foto de ${user?.name}`}
          />
          <label htmlFor="avatar">
            <FiCamera />

            <input
              id="avatar"
              type="file"
              onChange={handleChangeAvatar}
            />
          </label>
        </Avatar>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <Input
          placeholder="E-mail"
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
          icon={FiMail}
        />

        <Input
          placeholder="Senha atual"
          type="password"
          onChange={e => setPasswordOld(e.target.value)}
          icon={FiLock}
        />

        <Input
          placeholder="Nova atual"
          type="password"
          onChange={e => setPasswordNew(e.target.value)}
          icon={FiLock}
        />

        <Button title="Salvar" onClick={handleUpdate} />
      </Form>
    </Container>
  )
}