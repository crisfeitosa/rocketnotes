import { Container } from './styles'

interface ButtonTextProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export function ButtonText({ title, ...rest }: ButtonTextProps) {
  return (
    <Container
      type="button"
      {...rest}
    >
      {title}
    </Container>
  )
}