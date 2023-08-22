import React from 'react'
import { TypeAnimation } from 'react-type-animation'

import { Container } from './styles'
import { ItemTags } from '../../components/ItemTags'
import { Division } from '../../components/Division'

import { PortfolioDataProvider } from './data/PortfolioDataProvider'
import { PortfolioItem } from '../../components/PortfolioItem'

export function Portfolio() {
  const portfolioData = PortfolioDataProvider()

  return (
    <Container>
      <ItemTags tag="h1">
        <TypeAnimation
          sequence={['Portfolio']}
          cursor={true}
          repeat={1}
          wrapper={'h1'}
        />
      </ItemTags>

      {portfolioData.map((item, index) => (
        <React.Fragment key={item.title}>
          <PortfolioItem
            key={item.title}
            title={item.title}
            previewImageSrc={item.previewImageSrc}
            description={item.description}
            stacks={item.stacks}
            links={item.links}
            publishedOn={item.publishedOn}
          />
          {index < portfolioData.length - 1 && <Division />}
        </React.Fragment>
      ))}
    </Container>
  )
}
