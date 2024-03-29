import { useState, useEffect } from 'react'
import { FiDownload } from 'react-icons/fi'
import { TypeAnimation } from 'react-type-animation'
import { useTranslation } from 'react-i18next'

import { Container } from './styles'
import { ItemTags } from '../../components/ItemTags'
import hero from '../../assets/hero.png'

export function Home() {
  const { t } = useTranslation()

  const TranslatedTypeAnimation = ({ sequence, ...rest }) => {
    const { t } = useTranslation()
    const translatedSequence = sequence.map((text) => t(text))

    return <TypeAnimation sequence={translatedSequence} {...rest} />
  }

  const DelayedTypeAnimation = ({ sequence, delay, ...rest }) => {
    const [isReady, setisReady] = useState(false)

    useEffect(() => {
      const timer = setTimeout(() => {
        setisReady(true)
      }, delay)

      return () => clearTimeout(timer)
    }, [delay])

    const translatedSequence = sequence.map((text) => t(text))

    return isReady ? (
      <TypeAnimation sequence={translatedSequence} {...rest} />
    ) : null
  }

  return (
    <Container>
      <div className="main-content">
        <div className="p-wrapper">
          <ItemTags tag="p">
            <TranslatedTypeAnimation
              sequence={[t('home.p')]}
              cursor={false}
              repeat={1}
              wrapper={'p'}
            />
          </ItemTags>
        </div>

        <div className="h1-wrapper">
          <ItemTags tag="h1">
            <DelayedTypeAnimation
              sequence={['Jessica Ranft']}
              cursor={false}
              repeat={1}
              wrapper={'h1'}
              delay={1000}
            />
          </ItemTags>
        </div>

        <div className="h2-wrapper">
          <ItemTags tag="h2">
            <DelayedTypeAnimation
              sequence={[t('home.h2')]}
              cursor={true}
              repeat={1}
              wrapper={'h2'}
              delay={2000}
            />
          </ItemTags>
        </div>

        <div className="button-container">
          <ItemTags tag="button">
            <a
              href="https://docs.google.com/document/d/1gbzcmxcJi7iGdOae9CkSQzZxwuEyVHuZVa4Ep9HfSyQ/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <button>
                {t('home.downloadButton')}
                <FiDownload />
              </button>
            </a>
          </ItemTags>
        </div>
      </div>

      <div>
        <img
          src={hero}
          alt="a drawing of a laptop in pixel art style"
          className="hero"
        />
      </div>
    </Container>
  )
}
