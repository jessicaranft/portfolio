import { TypeAnimation } from 'react-type-animation'
import { useTranslation } from 'react-i18next'

import { Container, Main } from './styles'

import { ItemTags } from '../../components/ItemTags'

export function ThankYou() {
  const { t } = useTranslation()

  const TranslatedTypeAnimation = ({ sequence, ...rest }) => {
    const { t } = useTranslation()
    const translatedSequence = sequence.map((text) => t(text))

    return <TypeAnimation sequence={translatedSequence} {...rest} />
  }

  return (
    <Container>
      <Main>
        <ItemTags tag="h2">
          <TranslatedTypeAnimation
            sequence={[t('thankYou.h2')]}
            cursor={true}
            repeat={1}
            wrapper={'h2'}
          />
        </ItemTags>

        <ItemTags tag="p">
          <p>{t('thankYou.text')}</p>
        </ItemTags>
      </Main>
    </Container>
  )
}
