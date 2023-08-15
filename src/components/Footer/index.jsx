import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Container } from './styles'
import { Social } from '../Social'

export function Footer() {
  const { t } = useTranslation()
  const [year, setYear] = useState(new Date().getFullYear())

  return (
    <Container>
      <div>
        &copy; {year} {t('footer.copyright')}
      </div>

      <Social />
    </Container>
  )
}
