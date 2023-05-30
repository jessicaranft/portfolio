import { TypeAnimation } from 'react-type-animation';

import { Container, Main, Form, Input, Button, Textarea } from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ItemTags } from '../../components/ItemTags';

export function Contact() {
  return (
    <Container>
      <Header />

      <Main>
        <ItemTags tag="h1">
          <TypeAnimation
            sequence={['Get in touch']}
            cursor={true}
            repeat={1}
            wrapper={'h1'}
          />
        </ItemTags>

        <ItemTags tag="form">
          <Form>
            <label htmlFor="name" className="sr-only">Your name</label>
            <Input type="text" name="name" placeholder="Your name" />

            <label htmlFor="email" className="sr-only">Your e-mail</label>
            <Input type="text" name="email" placeholder="Your email" />

            <label htmlFor="message" className="sr-only">Your message</label>
            <Textarea name="message" placeholder="Your message" />

            <Button type="button">Send message</Button>
          </Form>
        </ItemTags>
      </Main>

      <Footer />
    </Container>
  );
}