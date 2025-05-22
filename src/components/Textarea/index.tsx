import { Container } from './styles'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  value?: string
}

export function Textarea({ value, ...rest }: TextareaProps) {
  return (
    <Container {...rest}>
      {value}
    </Container>
  )
}