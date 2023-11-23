import styled from 'styled-components'

export const LoadingAnimation = styled.div`
  width: 50px;
  height: 50px;
  border: 10px solid ${({ theme }) => theme.COLORS.DIVISION};
  border-top: 10px solid ${({ theme }) => theme.COLORS.BG_PRIMARY};
  border-radius: 50px;
  animation: spinner 1.5s linear infinite;

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`
