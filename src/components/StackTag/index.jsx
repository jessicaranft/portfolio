import { Container } from './styles'

export function StackTag({ stackName, ...rest }) {
  return <Container {...rest}>{stackName}</Container>
}
