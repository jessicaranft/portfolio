import { Container } from './styles'
import { SiGithub, SiLinkedin } from 'react-icons/si'

export function Social() {
  return (
    <Container>
      <a
        href="https://github.com/jessicaranft"
        target="_blank"
        rel="noreferrer"
      >
        <SiGithub size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/jessica-ranft/"
        target="_blank"
        rel="noreferrer"
      >
        <SiLinkedin size={24} />
      </a>
    </Container>
  )
}
