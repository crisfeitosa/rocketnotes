import styled from 'styled-components'
import backgroundimg from '../../assets/background.png'

export const Container = styled.div`
  min-height: 100vh;

  display: flex;
  align-items: stretch;
`

export const FormContainer = styled.div`
  display: flex;
  width: 40rem;
  padding: 2rem;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 21rem;
  margin: 0 auto;

  text-align: center;

  > h1 {
    font-size: 3rem;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  > h2 {
    font-size: 1.5rem;
    margin-top: 5.25rem;
    margin-bottom: 1.5rem;
  }

  > p {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > a {
    margin-top: 7.75rem;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundimg}) no-repeat center center;
  background-size: cover;
`