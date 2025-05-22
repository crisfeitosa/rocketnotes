import { Container } from './styles'

interface ButtonTextProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  isActive?: boolean;
}

export function ButtonText({ title, isActive = false, ...rest }: ButtonTextProps) {
  return (
    <Container
      type="button"
      $isactive={isActive}
      {...rest}
    >
      {title}
    </Container>
  )
}