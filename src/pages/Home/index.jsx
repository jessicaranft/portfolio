import { useState, useEffect } from 'react';
import { FiDownload } from 'react-icons/fi';
import { TypeAnimation } from 'react-type-animation';

import { Container, Main } from './styles';
import { Header} from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ItemTags } from '../../components/ItemTags';
import hero from '../../assets/hero.png';

export function Home() {
  const DelayedTypeAnimation = ({ sequence, delay, ...rest }) => {
    const [isReady, setisReady] = useState(false);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setisReady(true);
      }, delay);
  
      return () => clearTimeout(timer);
    }, [delay]);

    return isReady ? <TypeAnimation sequence={sequence} {...rest} /> : null;
  }

  return (
    <Container>

      <Header />

      <Main>
        <div className="main-content">
          <div className="p-wrapper">
            <ItemTags tag="p">
              <TypeAnimation
                sequence={['Hi, my name is']}
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
                sequence={['Front End Web Developer']}
                cursor={true}
                repeat={1}
                wrapper={'h2'}
                delay={2000}
              />
            </ItemTags>
          </div>

          <div className="button-container">
            <ItemTags tag="button">
              <button>Download CV<FiDownload /></button>
            </ItemTags>
          </div>

        </div>

        <div>
          <img src={hero} alt="a drawing of a laptop in pixel art style" className="hero" />
        </div>
      </Main>

      <Footer />
    </Container>
  );
}