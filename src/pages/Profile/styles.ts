import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 9rem;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    display: flex;
    align-items: center;

    padding: 0 7.75rem;

    svg {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 1.5rem;
    }

    button {
      background: none;
      border: none;
    }
  }
`

export const Form = styled.form`
  max-width: 21rem;
  margin: 1.875rem auto 0;

  > div:nth-child(4) {
    margin-top: 1.5rem;
  }
`

export const Avatar = styled.div`
  position: relative;
  margin: -7.5rem auto 2rem;

  width: 11rem;
  height: 11rem;
  
  > img {
    border-radius: 50%;
    width: 11rem;
    height: 11rem;
    object-fit: cover;
  }

  > label {
    width: 3rem;
    height: 3rem;

    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 0.5rem;
    right: 0.5rem;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 1.25rem;
      height: 1.25rem;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }
`