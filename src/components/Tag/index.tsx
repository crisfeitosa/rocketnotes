import { Container } from './styles'

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  title: string
}

export function Tag({ title, ...rest }: TagProps) {
  return (
    <Container {...rest}>
      {title}
    </Container>
  )
}