import { useNavigate } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'
import { useTranslation } from 'react-i18next'

import { Container, Input, Button, Textarea } from './styles'
import { ItemTags } from '../../components/ItemTags'

export function Contact() {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const TranslatedTypeAnimation = ({ sequence, ...rest }) => {
    const { t } = useTranslation()
    const translatedSequence = sequence.map((text) => t(text))

    return <TypeAnimation sequence={translatedSequence} {...rest} />
  }

  function submitHandler(e) {
    e.preventDefault()

    const form = document.getElementById('form')
    const formData = new FormData(form)

    const emptyNameField = form.elements.name.value.trim() === ''
    const emptyEmailField = form.elements.email.value.trim() === ''
    const emptyMessageField = form.elements.message.value.trim() === ''

    if (emptyNameField) {
      form.elements.name.style.border = '1px solid red'
      form.elements.name.addEventListener('input', function () {
        form.elements.name.style.border = ''
      })
      return
    }

    if (emptyEmailField) {
      form.elements.email.style.border = '1px solid red'
      form.elements.email.addEventListener('input', function () {
        form.elements.email.style.border = ''
      })
      return
    }

    if (emptyMessageField) {
      form.elements.message.style.border = '1px solid red'
      form.elements.message.addEventListener('input', function () {
        form.elements.message.style.border = ''
      })
      return
    }

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => navigate('/thank-you'))
      .catch((error) => alert(error))
  }

  return (
    <Container>
      <ItemTags tag="h1">
        <TranslatedTypeAnimation
          sequence={[t('contact.h1')]}
          cursor={true}
          repeat={1}
          wrapper={'h1'}
        />
      </ItemTags>

      <ItemTags tag="form">
        <form name="contact" method="POST" id="form">
          <input type="hidden" name="form-name" value="contact" />
          <label htmlFor="name" className="sr-only">
            {t('contact.formName')}
          </label>
          <Input type="text" name="name" placeholder={t('contact.formName')} />

          <label htmlFor="email" className="sr-only">
            {t('contact.formEmail')}
          </label>
          <Input
            type="email"
            name="email"
            placeholder={t('contact.formEmail')}
          />

          <label htmlFor="message" className="sr-only">
            {t('contact.formMessage')}
          </label>
          <Textarea name="message" placeholder={t('contact.formMessage')} />

          <Button onClick={submitHandler}>{t('contact.formButton')}</Button>
        </form>
      </ItemTags>
    </Container>
  )
}
