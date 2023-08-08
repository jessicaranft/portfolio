import { TypeAnimation } from 'react-type-animation';
import { useTranslation } from 'react-i18next';

import { Container, Main, PortfolioItem } from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ItemTags } from '../../components/ItemTags';
import { StackTag } from '../../components/StackTag';
import { Division } from '../../components/Division';

import previewRocketmovies from '../../assets/portfolio/rocketmovies.png';
import previewEnglishTravel from '../../assets/portfolio/englishtravel.png';
import previewFocusTimer from '../../assets/portfolio/focustimer.png';
import previewPersonalEnglish from '../../assets/portfolio/personalenglish.png';
import previewPortfolio from '../../assets/portfolio/portfolio.png';
import previewConexaoBritanica from '../../assets/portfolio/conexaobritanica.png';
import previewFoodExplorer from '../../assets/portfolio/foodexplorer.png';

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

        <PortfolioItem>
          <div>
            <ItemTags tag="h2">
              <h2>&lt;FoodExplorer /&gt;</h2>
            </ItemTags>
          </div>
          <div>
            <ItemTags tag="img">
              <img src={previewFoodExplorer} alt={t('portfolio.thumbAltText')} className="preview-image"/>
            </ItemTags>
          </div>
          
          <ItemTags tag="p">
            <div className="p-container">
              <p>
                {t('portfolio.foodexplorer.p1')} 
              </p>
              <p>
                {t('portfolio.foodexplorer.p2')} 
              </p>
              <p>
                {t('portfolio.foodexplorer.p3')} 
              </p>
              <p>
                {t('portfolio.foodexplorer.p4')} 
              </p>
              <p>
                {t('portfolio.foodexplorer.p5')} 
              </p>
              <p>
                {t('portfolio.foodexplorer.p6')} 
              </p>
              <p>
                Login: test@email.com<br />
                {t('portfolio.foodexplorer.pass')}: 123456
              </p>
            </div>
          </ItemTags>

          <ItemTags tag="span">
            <div className="stacks-container">
            <StackTag title="ReactJS" />
              <StackTag title="Styled Components" />
              <StackTag title="React Router Dom" />
              <StackTag title="NodeJS" />
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
                &gt; <a href="https://github.com/jessicaranft/FoodExplorer" target="_blank" rel="noreferrer">{t('portfolio.foodexplorer.link')}</a>
              </li>
              <li>
                &gt; <a href="https://frontend-foodexplorer.netlify.app" target="_blank" rel="noreferrer">Demo</a>
              </li>
            </ul>
          </ItemTags>

          <p className="date-text">{t('portfolio.createdAt')} 07/2023</p>
        </PortfolioItem>

        <Division />
        
        <PortfolioItem>
            <div>
              <ItemTags tag="h2">
                <h2>&lt;Conexão Britânica /&gt;</h2>
              </ItemTags>
            </div>

            <div>
              <ItemTags tag="img">
                <img src={previewConexaoBritanica} alt={t('portfolio.thumbAltText')} className="preview-image" />
              </ItemTags>
            </div>

            <ItemTags tag="p">
              <div className="p-container">
                <p>
                  {t('portfolio.conexaobritanica.p1')} 
                </p>
                <p>
                  {t('portfolio.conexaobritanica.p2')} 
                </p>
                <p>
                  {t('portfolio.conexaobritanica.p3')} 
                </p>
                <p>
                  {t('portfolio.conexaobritanica.p4')} 
                </p>
              </div>
            </ItemTags>

            <ItemTags tag="span">
              <div className="stacks-container">
                <StackTag title="Blog" />
                <StackTag title="WordPress" />
                <StackTag title="Elementor" />
                <StackTag title="CSS" />
                <StackTag title="Figma" />
                <StackTag title="SEO" />
              </div>
            </ItemTags>

            <ItemTags tag="ul">
              <ul>
                <li>
                  &gt; <a href="https://conexaobritanica.com" target="_blank" rel="noreferrer">{t('portfolio.conexaobritanica.link')}</a>
                </li>
              </ul>
            </ItemTags>

            <p className="date-text">{t('portfolio.createdAt')} 07/2023</p>
        </PortfolioItem>

        <Division />

        <PortfolioItem>
            <div>
              <ItemTags tag="h2">
                <h2>&lt;Portfolio /&gt;</h2>
              </ItemTags>
            </div>
            <div>
              <ItemTags tag="img">
                <img src={previewPortfolio} alt={t('portfolio.thumbAltText')} className="preview-image" />
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
                <StackTag title="JSON" />
                <StackTag title="Figma" />
              </div>
            </ItemTags>

            <ItemTags tag="ul">
              <ul>
                <li>
                  &gt; <a href="https://github.com/jessicaranft/portfolio" target="_blank" rel="noreferrer">{t('portfolio.portfolio.link')}</a>
                </li>
              </ul>
            </ItemTags>

            <p className="date-text">{t('portfolio.createdAt')} 06/2023</p>
        </PortfolioItem>

        <Division />

        <PortfolioItem>
            <div>
              <ItemTags tag="h2">
                <h2>&lt;RocketMovies /&gt;</h2>
              </ItemTags>
            </div>

            <div>
              <ItemTags tag="img">
                <img src={previewRocketmovies} alt={t('portfolio.thumbAltText')} className="preview-image" />
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
                  &gt; <a href="https://github.com/jessicaranft/rocketmovies-frontend" target="_blank" rel="noreferrer">Front End GitHub</a>
                </li>
                <li>
                  &gt; <a href="https://github.com/jessicaranft/rocketmovies-backend" target="_blank" rel="noreferrer">Back End GitHub</a>
                </li>
                <li>
                  &gt; <a href="https://rocketmovies-frontend.netlify.app/" target="_blank" rel="noreferrer">Demo</a>
                </li>
              </ul>
            </ItemTags>

            <p className="date-text">{t('portfolio.createdAt')} 04/2023</p>
        </PortfolioItem>

        <Division />

        <PortfolioItem>
            <div>
              <ItemTags tag="h2">
                <h2>&lt;English Travel /&gt;</h2>
              </ItemTags>
            </div>
            <div>
              <ItemTags tag="img">
                <img src={previewEnglishTravel} alt={t('portfolio.thumbAltText')} className="preview-image" />
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
                  &gt; <a href="https://conexaobritanica.com/english-travel" target="_blank" rel="noreferrer">{t('portfolio.englishtravel.link')}</a>
                </li>
              </ul>
            </ItemTags>

            <p className="date-text">{t('portfolio.createdAt')} 03/2023</p>
        </PortfolioItem>

        <Division />

        <PortfolioItem>
            <div>
              <ItemTags tag="h2">
                <h2>&lt;FocusTimer 3.0 /&gt;</h2>
              </ItemTags>
            </div>

            <div>
              <ItemTags tag="img">
                <img src={previewFocusTimer} alt={t('portfolio.thumbAltText')} className="preview-image" />
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
                  &gt; <a href="https://github.com/jessicaranft/explorer-Stage05-FocusTimer-DarkMode" target="_blank" rel="noreferrer">{t('portfolio.focustimer.link')}</a>
                </li>
                <li>
                  &gt; <a href="https://jessicaranft.github.io/explorer-Stage05-FocusTimer-DarkMode/" target="_blank" rel="noreferrer">Demo</a>
                </li>
              </ul>
            </ItemTags>

            <p className="date-text">{t('portfolio.createdAt')} 01/2023</p>
        </PortfolioItem>

        <Division />

        <PortfolioItem>
            <div>
              <ItemTags tag="h2">
                <h2>&lt;Personal English /&gt;</h2>
              </ItemTags>
            </div>
            <div>
              <ItemTags tag="img">
                <img src={previewPersonalEnglish} alt={t('portfolio.thumbAltText')} className="preview-image" />
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
                  &gt; <a href="https://conexaobritanica.com/personal-english" target="_blank" rel="noreferrer">{t('portfolio.personalenglish.link')}</a>
                </li>
              </ul>
            </ItemTags>

            <p className="date-text">{t('portfolio.createdAt')} 2022</p>
        </PortfolioItem>

      </Main>

      <Footer />
    </Container>
  );
}