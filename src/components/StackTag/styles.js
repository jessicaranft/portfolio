import styled from 'styled-components'

export const Container = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.DARK_GREEN};

  background-color: ${({ theme }) => theme.COLORS.GRAY};
  border-radius: 8px;
  padding: 0.4rem 0.8rem;
`
