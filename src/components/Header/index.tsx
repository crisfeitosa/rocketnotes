import { useNavigate } from 'react-router-dom';
import { RiShutDownLine } from 'react-icons/ri';

import { api } from '../../services/api';
import { useAuth } from '../../hooks/useAuth';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { Container, Profile, Logout } from './styles';

export function Header() {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const avatarUrl = user?.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  function handleSignOut() {
    navigate('/');
    signOut();
  }

  return (
    <Container>
      <Profile to="/profile">
        <img
          src={avatarUrl}
          alt={`Foto de ${user?.name}`}
        />

        <div>
          <span>Bem-vindo</span>
          <strong>{user?.name}</strong>
        </div>
      </Profile>

      <Logout onClick={handleSignOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}