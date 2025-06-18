import { useState } from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Form, Avatar } from "./styles";
import { useAuth } from '../../hooks/useAuth';

export function Profile() {
  const { user } = useAuth();

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [passwordOld, setPasswordOld] = useState('');
  const [passwordNew, setPasswordNew] = useState('');

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
            src="https://github.com/crisfeitosa.png"
            alt="Foto do usuário"
          />
          <label htmlFor="avatar">
            <FiCamera />

            <input
              id="avatar"
              type="file"
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

        <Button title="Salvar" />
      </Form>
    </Container>
  )
}