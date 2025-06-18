import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from './styles'
import { useAuth } from '../../hooks/useAuth';

export function Header() {
  const {signOut} = useAuth();

  return (
    <Container>
      <Profile to="/profile">
        <img
          src="https://github.com/crisfeitosa.png"
          alt="Foto do usuário"
        />

        <div>
          <span>Bem-vindo</span>
          <strong>Cristiano Feitosa</strong>
        </div>
      </Profile>

      <Logout onClick={signOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}