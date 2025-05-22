import { FiPlus, FiX } from 'react-icons/fi'

import { Container } from './styles'

interface NoteItemProps {
  isNew?: boolean
  value: string
  onClick: () => void
}

export function NoteItem({ isNew, value, onClick, ...rest }: NoteItemProps) {
  return (
    <Container isNew={isNew}>
      <input
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest}
      />

      <button
        type="button"
        onClick={onClick}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  )
}