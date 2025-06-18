import { useState } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, FormContainer, Form, Background } from './styles';

export function SignIn() {
  const { signIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    signIn({ email, password });
  }

  return (
    <Container>
      <FormContainer>
        <Form>
          <h1>Rocket Notes</h1>
          <p>Aplicação para salvar e gerenciar seus links úteis.</p>

          <h2>Faça seu login</h2>

          <Input
            placeholder="E-mail"
            type="text"
            icon={FiMail}
            onChange={e => setEmail(e.target.value)}
            value={email}
          />

          <Input
            placeholder="Senha"
            type="password"
            icon={FiLock}
            onChange={e => setPassword(e.target.value)}
            value={password}
          />

          <Button title="Entrar" onClick={handleSignIn} />

          <Link to="/register">Criar conta</Link>
        </Form>
      </FormContainer>

      <Background />
    </Container>
  )
}