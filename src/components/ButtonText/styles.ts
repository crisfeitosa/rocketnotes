import styled from 'styled-components'

interface ButtonTextProps {
  $isactive?: boolean
}

export const Container = styled.button<ButtonTextProps>`
  background: none;
  color: ${({ theme, $isactive }) => $isactive ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100};

  border: none;
  font-size: 1rem;
`