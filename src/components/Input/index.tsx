import { IconType } from 'react-icons'
import { Container } from './styles'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: IconType
}

export function Input({ icon: Icon, ...rest }: InputProps) {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input {...rest} />
    </Container>
  )
}