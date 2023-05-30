import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper';

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
            <TypeAnimation
              sequence={['About me']}
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
                  <p><strong>Birthday:</strong></p>
                  <p><strong>Nationality:</strong></p>
                  <p><strong>Study:</strong></p>
                  <p><strong>Interest:</strong></p>
                </div>
                <div>
                  <p>13 April</p>
                  <p>Brazil/United Kingdom</p>
                  <p>System Analysis and Development</p>
                  <p>Playing the piano</p>
                </div>
              </div>
            </div>
          </ItemTags>

          <ItemTags tag="p">
            <div className="middle-container">
              <p>
                Hi, my name is Jessica Ranft, and I'm a Front-End Web Developer based in Brasília - Brazil.
              </p>
              <p>
                My passion for web development started as a young teenager when I first discovered websites. 
                I felt absolutely amazed by them and decided that I would learn to create my own website, no matter what. 
                I learned HTML and CSS by myself studying the source code from other websites, and started creating and 
                publishing my first websites in the early 2000s.
              </p>
              <p>
                A few years later, I landed my first freelance job as a web designer, and that was my first job ever. 
                I continued working with website creation and maintenance throughout all my student years.
              </p>
              <p>
                After university, I stopped working with websites and started working as a piano teacher 
                (my university course was music, focused on classical piano). I kept teaching piano until I discovered that, 
                while I love music and piano, my real professional passion is in the technology area.
              </p>
              <p>
                I then decided to start a course about web development to update myself with the latest technologies, 
                and also to "formerly" educate myself in HTML, CSS, JavaScript, and all the other languages and technologies involved.
              </p>
              <p>
                My approach to every project is to plan carefully every step of the way with my clients, 
                understanding their needs, and delivering the most professional result as possible. 
                I'm committed to delivering high-quality results that exceed the clients' expectations and achieve their objectives.
              </p>
              <p>
                In addition to my technical skills, I pride myself on being highly attentive to 
                details and committed to my job, which allows me to deliver a beautiful and harmonious 
                looking layout focused on the features that are important to the clients' businesses.
              </p>
              <p>
                I also believe in fostering strong relationships with my clients and colleagues, 
                and I'm always willing to go the extra mile to ensure their success. I'm a strong collaborator 
                and team player, with excellent communication skills that allow me to work effectively with 
                clients and colleagues alike.
              </p>
              <p>
                My ability to work collaboratively and communicate effectively ensures that projects 
                run smoothly and that all stakeholders are kept informed and engaged throughout the 
                development process. I believe that building strong relationships is key to achieving 
                successful outcomes, and I always strive to foster a positive and productive working environment.
              </p>
              <p>
                If you're looking for a Front End Web Developer who is passionate, fast-learning and detailed-oriented, 
                please don't hesitate to <Link to="/contact">contact me</Link>. I'm excited to learn more about your needs and/or your 
                clients', and how I can help you achieve your/their goals.
              </p>
            </div>
          </ItemTags>

        </Main>

        <div className="section-title">
          <ItemTags tag="h2">
          <h2>&lt;Skills /&gt;</h2>
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