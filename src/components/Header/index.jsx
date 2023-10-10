import { useEffect, useState } from 'react'
import { Link, NavLink /*, useLocation */ } from 'react-router-dom'
import { TfiMenu, TfiClose } from 'react-icons/tfi'
import { useTranslation } from 'react-i18next'

import { Container, Branding, Menu, Languages } from './styles'
import { Social } from '../Social'
import { MobileMenu } from '../../components/MobileMenu'
import brFlag from '../../assets/br-flag.svg'
import ukFlag from '../../assets/uk-flag.svg'

export function Header() {
  const { t, i18n } = useTranslation()
  const [selectedLanguage, setSelectedLanguage] = useState(null)

  // const location = useLocation()

  function changeLanguage(lng) {
    i18n.changeLanguage(lng)
    setSelectedLanguage(lng)
  }

  function handleMenuOpen() {
    const openMenu = document.getElementById('open-menu')
    const closeMenu = document.getElementById('close-menu')
    const menu = document.getElementById('menu')

    menu.classList.remove('hide')
    menu.classList.remove('slide-out')
    menu.classList.add('slide-in')
    openMenu.classList.add('hide')
    closeMenu.classList.remove('hide')
  }

  function handleMenuClose() {
    const openMenu = document.getElementById('open-menu')
    const closeMenu = document.getElementById('close-menu')
    const menu = document.getElementById('menu')

    menu.classList.remove('slide-in')
    menu.classList.add('slide-out')
    openMenu.classList.remove('hide')
    closeMenu.classList.add('hide')
    setTimeout(() => {
      menu.classList.add('hide')
    }, 700)
  }

  /*
  useEffect(() => {
    const enButton = document.getElementById('en-button')

    if (location.pathname === '/blog') {
      if (enButton) {
        enButton.disabled = true
      }
    } else {
      if (enButton) {
        enButton.disabled = false
      }
    }
  }, [location.pathname])
  */

  useEffect(() => {
    function closeMenuOutsideClick(e) {
      const menu = document.getElementById('menu')
      const openMenu = document.getElementById('open-menu')

      if (!menu.contains(e.target) && !openMenu.contains(e.target)) {
        handleMenuClose()
      }
    }

    document.body.addEventListener('click', closeMenuOutsideClick)

    return () => {
      document.body.removeEventListener('click', closeMenuOutsideClick)
    }
  }, [])

  useEffect(() => {
    function backgroundEffect() {
      const bg = document.querySelector('.bg')
      const wrapper = document.querySelector('.page-wrapper')
      let mouseX = 0
      let mouseY = 0
      let deltaX = 0
      let deltaY = 0
      const sensitivity = 0.1
      const friction = 0.05

      wrapper.addEventListener('mousemove', (e) => {
        const rect = wrapper.getBoundingClientRect()
        mouseX = e.clientX - rect.left
        mouseY = e.clientY - rect.top
      })

      function updateBackgroundPosition() {
        const targetX = mouseX * sensitivity
        const targetY = mouseY * sensitivity
        deltaX += (targetX - deltaX) * friction
        deltaY += (targetY - deltaY) * friction
        bg.style.transform = `translate(${-deltaX}px, ${-deltaY}px)`
        requestAnimationFrame(updateBackgroundPosition)
      }

      updateBackgroundPosition()
    }

    backgroundEffect()
  }, [])

  return (
    <Container>
      <div className="mobile-only hide" id="menu">
        <MobileMenu />
      </div>

      <Branding>
        <Link to="/">J_</Link>
      </Branding>

      <div className="nav-container desktop-only">
        <nav>
          <Menu>
            <ul>
              <li>
                <NavLink to="/about">{t('menu.about')}</NavLink>
              </li>
              <li>
                <NavLink to="/portfolio">{t('menu.portfolio')}</NavLink>
              </li>
              <li>
                <NavLink to="/contact">{t('menu.contact')}</NavLink>
              </li>
            </ul>
          </Menu>

          <Social />

          <Languages>
            <button
              onClick={() => changeLanguage('en')}
              className={selectedLanguage === 'en' ? 'selected' : ''}
              id="en-button"
            >
              <img
                src={ukFlag}
                alt="click here to change the language to english"
              />
            </button>
            <button
              onClick={() => changeLanguage('pt')}
              className={selectedLanguage === 'pt' ? 'selected' : ''}
            >
              <img
                src={brFlag}
                alt="clique aqui para mudar o idioma para português"
              />
            </button>
          </Languages>
        </nav>
      </div>

      <div className="mobile-only cursor-pointer" id="open-menu">
        <TfiMenu size={36} onClick={handleMenuOpen} />
      </div>
      <div className="mobile-only cursor-pointer hide" id="close-menu">
        <TfiClose size={36} />
      </div>
    </Container>
  )
}
