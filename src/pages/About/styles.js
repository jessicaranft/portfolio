import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5.6rem;

  flex-grow: 1;

  position: relative;

  .top-container {
    width: 100%;
    max-width: 1440px;
    display: flex;
    flex-direction: row;
    align-items: left;
    justify-content: left;
    gap: 3.2rem;
  }

  .top-container-text {
    display: flex;
    justify-content: flex-start;
    gap: 2.4rem;
  }

  .top-container p {
    line-height: 3.6rem;
  }

  .about-img {
    width: 12.4rem;
    height: 12.4rem;
    border-radius: 50%;
  }

  .middle-container {
    width: 100%;
    text-align: justify;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }

  .p-block-container {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }

  .middle-container ul {
    list-style: none;

    display: flex;
    justify-content: space-around;
    gap: 4.8rem;
    flex-wrap: wrap;
  }

  .middle-container ul li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;
  }

  .icon-wrapper {
    width: 6.4rem;
    height: 6.4rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .middle-container ul li img {
    width: 6rem;
    height: 6rem;
    transition: width 0.3s;
  }

  .middle-container ul li img:hover {
    width: 6.4rem;
    height: 6.4rem;
  }

  .middle-container ul li p {
    font-size: 1.2rem;
  }

  @media only screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }

  .top-container {
    display: flex;
    flex-direction: column;
  }

  .top-container-text {
    display: grid;
    grid-template-columns: auto auto;
    grid-auto-rows: auto;
    grid-row-gap: 0.4rem;
  }
`
