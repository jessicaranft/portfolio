import { Container } from './styles';

export function ItemTags({ tag, children }) {
  return (
    <Container>
      <p className="html-tags">&lt;{tag}&gt;</p>
      {children}
      <p className="html-tags">&lt;/{tag}&gt;</p>
    </Container>
  );
}