import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 2.4rem;

  a {
    color: ${({ theme }) => theme.COLORS.FONT_PRIMARY};
  }
`
