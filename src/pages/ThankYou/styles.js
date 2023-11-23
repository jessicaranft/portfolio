import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1440px;
  min-height: 100vh;

  margin: auto;

  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 900px) {
    width: 100%;
    height: 100%;
  }
`

export const Main = styled.main`
  width: 100%;
  height: auto;
  padding-left: clamp(3rem, 5rem + 2vw, 15.6rem);
  padding-right: clamp(3rem, 5rem + 2vw, 15.6rem);
  margin: 6rem auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5.6rem;

  flex-grow: 1;
  min-height: 50vh;

  @media only screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    padding: 0 2.4rem;
    margin: 3.6rem auto;
  }
`
