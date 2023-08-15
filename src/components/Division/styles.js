import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
  justify-content: center;

  div {
    background-color: ${({ theme }) => theme.COLORS.YELLOW};
    width: 1.2rem;
    height: 1.2rem;
  }
`
