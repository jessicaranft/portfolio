import { TypeAnimation } from 'react-type-animation';
import { useTranslation } from 'react-i18next';

import { Container, Main, PortfolioItem } from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ItemTags } from '../../components/ItemTags';
import { StackTag } from '../../components/StackTag';
import { ImageModal } from '../../components/ImageModal';

import previewRocketmovies from '../../assets/portfolio/rocketmovies.png';
import previewEnglishTravel from '../../assets/portfolio/englishtravel.png';
import previewFocusTimer from '../../assets/portfolio/focustimer.png';
import previewPersonalEnglish from '../../assets/portfolio/personalenglish.png';
import previewPortfolio from '../../assets/portfolio/portfolio.png';

export function Portfolio() {
  const { t } = useTranslation();

  return (
    <Container>
      <Header />
      
      <Main>
        <ItemTags tag="h1">
        <TypeAnimation
            sequence={['Portfolio']}
            cursor={true}
            repeat={1}
            wrapper={'h1'}
          />
        </ItemTags>

        <PortfolioItem className="reverse">
          <div className="grid-image">
            <div className="mobile-only">
              <ItemTags tag="h2">
                <h2>&lt;Portfolio /&gt;</h2>
              </ItemTags>
            </div>
            <div className="desktop-only">
              <ImageModal
                image={previewPortfolio}
                alt="thumbnail image of my portfolio website"
              />
              <p className="small-text">{t('portfolio.imageText')}</p>
            </div>
            <div className="mobile-only">
              <ItemTags tag="img">
                <img src={previewPortfolio} alt="thumbnail image of my portfolio website" />
              </ItemTags>
            </div>
          </div>

          <div className="grid-text">
            <div className="desktop-only">
              <ItemTags tag="h2">
                <h2>&lt;Portfolio /&gt;</h2>
              </ItemTags>
            </div>

            <ItemTags tag="p">
              <div className="p-container">
                <p>
                  {t('portfolio.portfolio.p1')} 
                </p>
                <p>
                  {t('portfolio.portfolio.p2')} 
                </p>
                <p>
                  {t('portfolio.portfolio.p3')} 
                </p>
              </div>
            </ItemTags>

            <ItemTags tag="span">
              <div className="stacks-container">
                <StackTag title="ReactJS" />
                <StackTag title="Styled Components" />
                <StackTag title="React Router Dom" />
                <StackTag title="CSS in JS" />
                <StackTag title="Figma" />
              </div>
            </ItemTags>

            <ItemTags tag="ul">
              <ul>
                <li>
                  &gt; <a href="https://github.com/jessicaranft/portfolio" target="_blank">{t('portfolio.portfolio.link')}</a>
                </li>
              </ul>
            </ItemTags>

          </div>

        </PortfolioItem>

        <PortfolioItem>
          <div className="grid-text">
            <div className="desktop-only">
              <ItemTags tag="h2">
                <h2>&lt;RocketMovies /&gt;</h2>
              </ItemTags>
            </div>

            <ItemTags tag="p">
              <div className="p-container">
                <p>
                  {t('portfolio.rocketmovies.p1')} 
                </p>
                <p>
                  {t('portfolio.rocketmovies.p2')}
                </p>
                <p>
                  {t('portfolio.rocketmovies.p3')}
                </p>
                <p>
                  Login: jessica@email.com<br />
                  {t('portfolio.rocketmovies.p4')}: 123
                </p>
              </div>
            </ItemTags>

            <ItemTags tag="span">
              <div className="stacks-container">
                <StackTag title="ReactJS" />
                <StackTag title="Styled Components" />
                <StackTag title="React Router Dom" />
                <StackTag title="NodeJS" />
                <StackTag title="Next.js" />
                <StackTag title="Express" />
                <StackTag title="HTML5" />
                <StackTag title="CSS in JS" />
                <StackTag title="API Rest" />
                <StackTag title="SQLite" />
              </div>
            </ItemTags>

            <ItemTags tag="ul">
              <ul>
                <li>
                  &gt; <a href="https://github.com/jessicaranft/rocketmovies-frontend" target="_blank">Front End GitHub</a>
                </li>
                <li>
                  &gt; <a href="https://github.com/jessicaranft/rocketmovies-backend" target="_blank">Back End GitHub</a>
                </li>
                <li>
                  &gt; <a href="https://rocketmovies-frontend.netlify.app/" target="_blank">Demo</a>
                </li>
              </ul>
            </ItemTags>

          </div>
          <div className="grid-image">
            <div className="mobile-only">
              <ItemTags tag="h2">
                <h2>&lt;RocketMovies /&gt;</h2>
              </ItemTags>
            </div>
            <div className="desktop-only">
              <ImageModal
                image={previewRocketmovies}
                alt="thumbnail image of the rocketmovies web app screen"
              />
              <p className="small-text">{t('portfolio.imageText')}</p>
            </div>
            <div className="mobile-only">
              <ItemTags tag="img">
                <img src={previewRocketmovies} alt="thumbnail image of the rocketmovies web app screen" />
              </ItemTags>
            </div>
          </div>
        </PortfolioItem>

        <PortfolioItem className="reverse">
          <div className="grid-image">
            <div className="mobile-only">
              <ItemTags tag="h2">
                <h2>&lt;English Travel /&gt;</h2>
              </ItemTags>
            </div>
            <div className="desktop-only">
              <ImageModal
                image={previewEnglishTravel}
                alt="thumbnail image of the english travel website"
              />
              <p className="small-text">{t('portfolio.imageText')}</p>
            </div>
            <div className="mobile-only">
              <ItemTags tag="img">
                <img src={previewEnglishTravel} alt="thumbnail image of the english travel website" />
              </ItemTags>
            </div>
          </div>

          <div className="grid-text">
            <div className="desktop-only">
              <ItemTags tag="h2">
                <h2>&lt;English Travel /&gt;</h2>
              </ItemTags>
            </div>

            <ItemTags tag="p">
              <div className="p-container">
                <p>
                  {t('portfolio.englishtravel.p1')} 
                </p>
                <p>
                  {t('portfolio.englishtravel.p2')} 
                </p>
                <p>
                  {t('portfolio.englishtravel.p3')} 
                </p>
                <p>
                  {t('portfolio.englishtravel.p4')} 
                </p>
              </div>
            </ItemTags>

            <ItemTags tag="span">
              <div className="stacks-container">
                <StackTag title="Landing Page" />
                <StackTag title="WordPress" />
                <StackTag title="Elementor" />
                <StackTag title="CSS" />
                <StackTag title="Figma" />
                <StackTag title="Photoshop" />
              </div>
            </ItemTags>

            <ItemTags tag="ul">
              <ul>
                <li>
                  &gt; <a href="https://conexaobritanica.com/english-travel" target="_blank">{t('portfolio.englishtravel.link')}</a>
                </li>
              </ul>
            </ItemTags>

          </div>

        </PortfolioItem>

        <PortfolioItem>
          <div className="grid-text">
            <div className="desktop-only">
              <ItemTags tag="h2">
                <h2>&lt;FocusTimer 3.0 /&gt;</h2>
              </ItemTags>
            </div>

            <ItemTags tag="p">
              <div className="p-container">
                <p>
                  {t('portfolio.focustimer.p1')} 
                </p>
                <p>
                  {t('portfolio.focustimer.p2')} 
                </p>
                <p>
                  {t('portfolio.focustimer.p3')} 
                </p>
                <p>
                  {t('portfolio.focustimer.p4')} 
                </p>
              </div>
            </ItemTags>

            <ItemTags tag="span">
              <div className="stacks-container">
                <StackTag title="HTML5" />
                <StackTag title="CSS3" />
                <StackTag title="JavaScript (vanilla)" />
                <StackTag title="ES6 Modules" />
              </div>
            </ItemTags>

            <ItemTags tag="ul">
              <ul>
                <li>
                  &gt; <a href="https://github.com/jessicaranft/explorer-Stage05-FocusTimer-DarkMode" target="_blank">{t('portfolio.focustimer.link')}</a>
                </li>
                <li>
                  &gt; <a href="https://jessicaranft.github.io/explorer-Stage05-FocusTimer-DarkMode/" target="_blank">Demo</a>
                </li>
              </ul>
            </ItemTags>

          </div>
          <div className="grid-image">
            <div className="mobile-only">
              <ItemTags tag="h2">
                <h2>&lt;FocusTimer 3.0 /&gt;</h2>
              </ItemTags>
            </div>
            <div className="desktop-only">
              <ImageModal
                image={previewFocusTimer}
                alt="thumbnail image of the focustimer web app screen"
              />
              <p className="small-text">{t('portfolio.imageText')}</p>
            </div>
            <div className="mobile-only">
              <ItemTags tag="img">
                <img src={previewFocusTimer} alt="thumbnail image of the focustimer web app screen" />
              </ItemTags>
            </div>
          </div>
        </PortfolioItem>

        <PortfolioItem className="reverse">
          <div className="grid-image">
            <div className="mobile-only">
              <ItemTags tag="h2">
                <h2>&lt;Personal English /&gt;</h2>
              </ItemTags>
            </div>
            <div className="desktop-only">
              <ImageModal
                image={previewPersonalEnglish}
                alt="thumbnail image of the personal english website"
              />
              <p className="small-text">{t('portfolio.imageText')}</p>
            </div>
            <div className="mobile-only">
              <ItemTags tag="img">
                <img src={previewPersonalEnglish} alt="thumbnail image of the personal english website" />
              </ItemTags>
            </div>
          </div>

          <div className="grid-text">
            <div className="desktop-only">
              <ItemTags tag="h2">
                <h2>&lt;Personal English /&gt;</h2>
              </ItemTags>
            </div>

            <ItemTags tag="p">
              <div className="p-container">
                <p>
                  {t('portfolio.personalenglish.p1')} 
                </p>
                <p>
                  {t('portfolio.personalenglish.p2')} 
                </p>
                <p>
                  {t('portfolio.personalenglish.p3')} 
                </p>
              </div>
            </ItemTags>

            <ItemTags tag="span">
              <div className="stacks-container">
                <StackTag title="Landing Page" />
                <StackTag title="WordPress" />
                <StackTag title="Elementor" />
                <StackTag title="CSS" />
                <StackTag title="Photoshop" />
              </div>
            </ItemTags>

            <ItemTags tag="ul">
              <ul>
                <li>
                  &gt; <a href="https://conexaobritanica.com/personal-english" target="_blank">{t('portfolio.personalenglish.link')}</a>
                </li>
              </ul>
            </ItemTags>

          </div>

        </PortfolioItem>

      </Main>

      <Footer />
    </Container>
  );
}