import { Container } from './styles'
import { Tag } from '../Tag'

interface Note {
  id: string;
  title: string;
  tags?: { id: string; name: string; }[];
}

export interface NoteProps {
  data: Note;
  onClick: () => void;
}

export function Note({ data, onClick }: NoteProps) {
  return (
    <Container type="button" onClick={onClick}>
      <h1>{data.title}</h1>
      <footer>
        {data.tags && data.tags.map(tag => (
          <Tag key={tag.id} title={tag.name} />
        ))}
      </footer>
    </Container>
  )
}