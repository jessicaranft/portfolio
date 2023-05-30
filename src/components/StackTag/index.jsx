import { Container } from './styles';

export function StackTag({ title, ...rest }) {
  return (
    <Container {...rest}>
     {title}
    </Container>
  );
}