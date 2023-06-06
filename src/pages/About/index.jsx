import { TypeAnimation } from 'react-type-animation';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper';
import { useTranslation } from 'react-i18next';

import { Container, Main } from './styles';
import { Header} from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ItemTags } from '../../components/ItemTags';

import aboutImg from '../../assets/about.jpg';
import jsIcon from '../../assets/slides/slide-javascript.svg';
import htmlIcon from '../../assets/slides/slide-html.svg';
import cssIcon from '../../assets/slides/slide-css.svg';
import reactIcon from '../../assets/slides/slide-react.svg';
import figmaIcon from '../../assets/slides/slide-figma.svg';
import gitIcon from '../../assets/slides/slide-git.svg';
import wpIcon from '../../assets/slides/slide-wordpress.svg';
import photoshopIcon from '../../assets/slides/slide-photoshop.svg';


export function About() {
  const { t } = useTranslation();

  const TranslatedTypeAnimation = ({ sequence, ...rest }) => {
    const { t } = useTranslation();
    const translatedSequence = sequence.map((text) => t(text));

    return <TypeAnimation sequence={translatedSequence} {...rest} />;
  };

  const slides = [
    {
      id: 1,
      name: "JavaScript",
      icon: jsIcon
    },
    {
      id: 2,
      name: "React",
      icon: reactIcon
    },
    {
      id: 3,
      name: "HTML5",
      icon: htmlIcon
    },
    {
      id: 4,
      name: "CSS3",
      icon: cssIcon
    },
    {
      id: 5,
      name: "Git",
      icon: gitIcon
    },
    {
      id: 6,
      name: "WordPress",
      icon: wpIcon
    },
    {
      id: 7,
      name: "Figma",
      icon: figmaIcon
    },
    {
      id: 8,
      name: "Photoshop",
      icon: photoshopIcon
    }
  ];

  return (
    <Container>
      <div className="container">
        <Header />

        <Main>
          <ItemTags tag="h1">
            <TranslatedTypeAnimation
              sequence={[t('about.h1')]}
              cursor={true}
              repeat={1}
              wrapper={'h1'}
            />
          </ItemTags>

          <ItemTags tag="div">
            <div className="top-container">
              <img src={aboutImg} alt="Jessica Ranft's photo" className="about-img" />
              <div className="top-container-text">
                <div className="birthday">
                  <p><strong>{t('about.birthdayTitle')}:</strong></p>
                </div>
                <div className="b-data">
                  <p>{t('about.birthdayContent')}</p>
                </div>
                <div className="nationality">
                  <p><strong>{t('about.nationalityTitle')}:</strong></p>
                </div>
                <div className="n-data">
                  <p>{t('about.nationalityContent')}</p>
                </div>
                <div className="study">
                  <p><strong>{t('about.studyTitle')}:</strong></p>
                </div>
                <div className="s-data">
                  <p>{t('about.studyContent')}</p>
                </div>
                <div className="interest">
                  <p><strong>{t('about.interestTitle')}:</strong></p>
                </div>
                <div className="i-data">
                  <p>{t('about.interestContent')}</p>
                </div>
              </div>
            </div>
          </ItemTags>

          {/*
          <Summary>
            <h3>{t('about.summary')}:</h3>
            <li>
              <a href="#how-it-started">&gt; {t('about.howItStarted')}</a>
            </li>
            <li>
              <a href="#actual-days">&gt; {t('about.toThisDate')}</a>
            </li>
            <li>
              <a href="#work-style">&gt; {t('about.workStyle')}</a>
            </li>
            <li>
              <a href="#team-playing">&gt; {t('about.teamPlayer')}</a>
            </li>
            <li>
              <a href="#work-with-me">&gt; {t('about.workWithMe')}</a>
            </li>
            <li>
              <a href="#skills">&gt; {t('about.skills')}</a>
            </li>
          </Summary>
          */}

            <div className="middle-container">
              <ItemTags tag="h2">
                <h2 id="how-it-started">{t('about.howItStarted')}</h2>
              </ItemTags>
              <ItemTags tag="p">
                <div className="p-block-container">
                  <p>
                    {t('about.p1')}
                  </p>
                  <p>
                    {t('about.p2')}
                  </p>
                  <p>
                    {t('about.p3')}
                  </p>
                  <p>
                    {t('about.p4')}
                  </p>
                </div>
              </ItemTags>
              <ItemTags tag="h2">
                <h2 id="actual-days">{t('about.toThisDate')}</h2>
              </ItemTags>
              <ItemTags tag="p">
                <p>
                  {t('about.p5')}
                </p>
              </ItemTags>
              <ItemTags tag="h2">
                <h2 id="work-style">{t('about.workStyle')}</h2>
              </ItemTags>
              <ItemTags tag="p">
                <div className="p-block-container">
                  <p>
                    {t('about.p6')}
                  </p>
                  <p>
                    {t('about.p7')}
                  </p>
                </div>
              </ItemTags>
              <ItemTags tag="h2">
                <h2 id="team-playing">{t('about.teamPlayer')}</h2>
              </ItemTags>
              <ItemTags tag="p">
                <div className="p-block-container">
                  <p>
                    {t('about.p8')}
                  </p>
                  <p>
                    {t('about.p9')}
                  </p>
                </div>
              </ItemTags>
              <ItemTags tag="h2">
                <h2 id="work-with-me">{t('about.workWithMe')}</h2>
              </ItemTags>
              <ItemTags tag="p">
                <p>
                  {t('about.p10')}
                </p>
              </ItemTags>
              <ItemTags tag="h2">
                <h2>{t('about.skills')}</h2>
              </ItemTags>
            </div>

        </Main>
      </div>

      <section>
        <ItemTags tag="div">
          <div className="slideshow-container">
            <div className="swiper-container">
              <Swiper
              slidesPerView={4}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                  loop: true
                }}
                modules={[Autoplay]}
                className="mySwiper"
              >
                {slides.map((slide) => (
                  <SwiperSlide key={`swiper-${slide.id}`}>
                    <div className="slide-container" key={slide.id}>
                      <img src={slide.icon} alt={`${slide.name} icon`} />
                      <p className="center">{slide.name}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

        </ItemTags>
      </section>

      <Footer />
    </Container>
  );
}