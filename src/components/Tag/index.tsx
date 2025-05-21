import { Container } from './styles'

type TagProps = {
  title: string
}

export function Tag({ title }: TagProps) {
  return (
    <Container>
      {title}
    </Container>
  )
}