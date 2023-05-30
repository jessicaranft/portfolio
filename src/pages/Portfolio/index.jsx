import { TypeAnimation } from 'react-type-animation';

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

export function Portfolio() {
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
          <div className="grid-text">
            <div className="desktop-only">
              <ItemTags tag="h2">
                <h2>&lt;RocketMovies /&gt;</h2>
              </ItemTags>
            </div>

            <ItemTags tag="p">
              <div className="p-container">
                <p>
                  RocketMovies is a React web app where you can create an account and register 
                  information about movies you've watched, and search through your movie database. 
                </p>
                <p>
                  The layout design was created by Rocketseat, and the app is currently only in Portuguese.
                </p>
                <p>
                  If you'd like to try the demo, you can use the credentials below. They wil allow you to navigate throught
                  all pages of the app, and see movies already registered in the database. Please feel free to register your own user as well:
                </p>
                <p>
                  Login: jessica@email.com<br />
                  Password: 123
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
              <p className="small-text">Click image to expand</p>
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
              <p className="small-text">Click image to expand</p>
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
                  This is a landing page for an online travel English language course, with the purpose of providing
                  all the information about the course and CTA to the checkout page.
                </p>
                <p>
                  Since the previous version was created with WordPress + Elementor Pro, 
                  and also for quick delivery and amount of page content, I decided to keep using that combo.
                </p>
                <p>
                  I created the layout using Figma, with the intention of using the brand colors and having a big hero section.
                </p>
                <p>
                  The layout is fully-responsive with mobile, tablet and desktop versions.
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
                  &gt; <a href="https://conexaobritanica.com/english-travel" target="_blank">Live page</a>
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
                  This was my first full project with HTML, CSS and JavaScript all together. 
                </p>
                <p>
                  It's a web app timer for studying or meditating with background music options, volume control,
                 and dark & light modes.
                </p>
                <p>
                  The web app also features buttons with play and pause functions, buttons to add and remove 5 minutes
                  from the timer, and a volume slider.
                </p>
                <p>
                  The layout was based on a Figma design provided by Rocketseat. The layout is fully responsive.
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
                  &gt; <a href="https://github.com/jessicaranft/explorer-Stage05-FocusTimer-DarkMode" target="_blank">GitHub repository</a>
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
              <p className="small-text">Click image to expand</p>
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
              <p className="small-text">Click image to expand</p>
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
                  This is a landing page for online private English lessons, with the purpose of calling people
                  to sign up for a waiting list. The page provides full description about the lessons and teacher,
                  and has a sign up form where people can register o join the waiting list.
                </p>
                <p>
                  The layout was created using the combo WordPress + Elementor Pro.
                </p>
                <p>
                  The layout is fully-responsive with mobile, tablet and desktop versions.
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
                  &gt; <a href="https://conexaobritanica.com/personal-english" target="_blank">Live page</a>
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