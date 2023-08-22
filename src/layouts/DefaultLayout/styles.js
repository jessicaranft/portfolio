import styled from 'styled-components'

export const DefaultLayoutContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  .content-wrapper {
    width: 100%;
    max-width: 1440px;

    padding: 7.2rem;

    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
  }

  @media only screen and (max-width: 768px) {
    .content-wrapper {
      padding: 3.6rem 2.4rem;
    }
  }
`
