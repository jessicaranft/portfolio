import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TfiMenu, TfiClose } from 'react-icons/tfi';
import { useTranslation } from 'react-i18next';

import { Container, Branding, Menu, Languages } from './styles';
import { Social } from '../Social';
import { MobileMenu } from '../../components/MobileMenu';

export function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  function handleMenu() {
    const openMenu = document.getElementById('open-menu');
    const closeMenu = document.getElementById('close-menu');
    const menu = document.getElementById('menu');
    openMenu.classList.toggle('hide');    
    closeMenu.classList.toggle('hide');
    menu.classList.toggle('hide');
  }

  useEffect(() => {
    function backgroundEffect() {
      const bg = document.querySelector('.bg');
      const wrapper = document.querySelector('.page-wrapper');
      let mouseX = 0;
      let mouseY = 0;
      let deltaX = 0;
      let deltaY = 0;
      const sensitivity = 0.1;
      const friction = 0.05;
      
      wrapper.addEventListener('mousemove', (e) => {
        const rect = wrapper.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
      });
      
      function updateBackgroundPosition() {
        const targetX = mouseX * sensitivity;
        const targetY = mouseY * sensitivity;
        deltaX += (targetX - deltaX) * friction;
        deltaY += (targetY - deltaY) * friction;
        bg.style.transform = `translate(${-deltaX}px, ${-deltaY}px)`;
        requestAnimationFrame(updateBackgroundPosition);
      }
      
      updateBackgroundPosition();
    }

    backgroundEffect();
  }, []);

  return (
    <Container>

    <div className="mobile-only hide" id="menu">
      <MobileMenu />
    </div>

      <Branding>
        <Link to="/">
          J_
        </Link>
      </Branding>

      <div className="nav-container desktop-only">
        <nav>
          <Menu>
            <ul>
              <li>
                <Link to="/about">{t('menu.about')}</Link>
              </li>
              <li>
                <Link to="/portfolio">{t('menu.portfolio')}</Link>
              </li>
              <li>
                <Link to="/contact">{t('menu.contact')}</Link>
              </li>
            </ul>
          </Menu>

          <Social />

          <Languages>
            <button onClick={() => changeLanguage('en')}>EN</button>
            <button onClick={() => changeLanguage('pt')}>PT</button>
          </Languages>
        </nav>
      </div>

      <div className="mobile-only cursor-pointer" id="open-menu">
        <TfiMenu size={36} onClick={handleMenu} />
      </div>
      <div className="mobile-only cursor-pointer hide" id="close-menu">
        <TfiClose size={36} onClick={handleMenu} />
      </div>

    </Container>
  );
}