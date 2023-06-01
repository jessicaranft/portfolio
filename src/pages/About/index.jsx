import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper';
import { useTranslation, Trans } from 'react-i18next';

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
                <div>
                  <p><strong>{t('about.birthdayTitle')}:</strong></p>
                  <p><strong>{t('about.nationalityTitle')}:</strong></p>
                  <p><strong>{t('about.studyTitle')}:</strong></p>
                  <p><strong>{t('about.interestTitle')}:</strong></p>
                </div>
                <div>
                  <p>{t('about.birthdayContent')}</p>
                  <p>{t('about.nationalityContent')}</p>
                  <p>{t('about.studyContent')}</p>
                  <p>{t('about.interestContent')}</p>
                </div>
              </div>
            </div>
          </ItemTags>

          <ItemTags tag="p">
            <div className="middle-container">
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
              <p>
                {t('about.p5')}
              </p>
              <p>
                {t('about.p6')}
              </p>
              <p>
                {t('about.p7')}
              </p>
              <p>
                {t('about.p8')}
              </p>
              <p>
                {t('about.p9')}
              </p>
              <p>
                {t('about.p10')}
              </p>
            </div>
          </ItemTags>

        </Main>

        <div className="section-title">
          <ItemTags tag="h2">
          <h2>&lt;{t('about.h2')} /&gt;</h2>
          </ItemTags>
        </div>
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