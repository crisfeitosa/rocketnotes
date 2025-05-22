import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900} ;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  
  margin-bottom: 0.5rem;
  border-radius: 0.625rem;

  padding: 0 1rem;

  gap: 0.75rem;

  > input {
    height: 3.5rem;
    width: 100%;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: 0;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300} 
    }
  }
`