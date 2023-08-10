import { useTranslation } from 'react-i18next'

import { Container } from './styles'
import { ItemTags } from '../ItemTags'
import { StackTag } from '../StackTag'

export function PortfolioItem({
  title,
  previewImageSrc,
  description,
  stacks,
  links,
  publishedOn,
}) {
  const { t } = useTranslation()

  return (
    <Container>
      <div>
        <ItemTags tag="h2">
          <h2>{title}</h2>
        </ItemTags>
      </div>
      <div>
        <ItemTags tag="img">
          <img
            src={previewImageSrc}
            alt={t('portfolio.thumbAltText')}
            className="preview-image"
          />
        </ItemTags>
      </div>

      <ItemTags tag="p">
        <div className="p-container">
          <ul>
            {description.map((p, index) => (
              <li key={index}>{p}</li>
            ))}
          </ul>
        </div>
      </ItemTags>

      <ItemTags tag="span">
        <div className="stacks-container">
          <ul>
            {stacks.map((stack, index) => (
              <li key={index}>
                <StackTag stackName={stack} />
              </li>
            ))}
          </ul>
        </div>
      </ItemTags>

      <ItemTags tag="ul">
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              &gt;{' '}
              <a href={link.url} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </ItemTags>

      <p className="date-text">
        {t('portfolio.createdAt')} {publishedOn}
      </p>
    </Container>
  )
}
