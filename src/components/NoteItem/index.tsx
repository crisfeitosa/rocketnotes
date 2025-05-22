import { FiPlus, FiX } from 'react-icons/fi'

import { Container } from './styles'

interface NoteItemProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isNew?: boolean
  value?: string
  onClick?: () => void
}

export function NoteItem({ isNew = false, value, onClick, ...rest }: NoteItemProps) {
  return (
    <Container $isnew={isNew}>
      <input
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest}
      />

      <button
        type="button"
        onClick={onClick}
        className={isNew ? 'button-add' : 'button-delete'}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  )
}