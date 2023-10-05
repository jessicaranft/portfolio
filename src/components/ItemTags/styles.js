import styled from 'styled-components'

export const Container = styled.div`
  .html-tags {
    font-size: 1.2rem;
    line-height: 1.6rem;
    color: ${({ theme }) => theme.COLORS.HTML_TAG};
  }

  @media only screen and (max-width: 768px) {
    .html-tags {
      font-size: 1rem;
      line-height: 1.3rem;
    }
  }
`
