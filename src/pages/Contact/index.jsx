import { TypeAnimation } from 'react-type-animation';
import { useTranslation } from 'react-i18next';

import { Container, Main, Form, Input, Button, Textarea } from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ItemTags } from '../../components/ItemTags';

export function Contact() {
  const { t } = useTranslation();

  const TranslatedTypeAnimation = ({ sequence, ...rest }) => {
    const { t } = useTranslation();
    const translatedSequence = sequence.map((text) => t(text));

    return <TypeAnimation sequence={translatedSequence} {...rest} />;
  };

  return (
    <Container>
      <Header />

      <Main>
        <ItemTags tag="h1">
          <TranslatedTypeAnimation
            sequence={[t('contact.h1')]}
            cursor={true}
            repeat={1}
            wrapper={'h1'}
          />
        </ItemTags>

        <ItemTags tag="form">
          <Form name="contact" method="POST" netlify>
            <label htmlFor="name" className="sr-only">{t('contact.formName')}</label>
            <Input type="text" name="name" placeholder={t('contact.formName')} />

            <label htmlFor="email" className="sr-only">{t('contact.formEmail')}</label>
            <Input type="text" name="email" placeholder={t('contact.formEmail')} />

            <label htmlFor="message" className="sr-only">{t('contact.formMessage')}</label>
            <Textarea name="message" placeholder={t('contact.formMessage')} />

            <Button type="submit">{t('contact.formButton')}</Button>
          </Form>
        </ItemTags>
      </Main>

      <Footer />
    </Container>
  );
}