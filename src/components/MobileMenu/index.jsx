import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { Container, Branding, Languages } from './styles'
import { Social } from '../Social'
import brFlag from '../../assets/br-flag.svg'
import ukFlag from '../../assets/uk-flag.svg'

export function MobileMenu() {
  const { t, i18n } = useTranslation()
  const [selectedLanguage, setSelectedLanguage] = useState(null)

  const location = useLocation()

  function changeLanguage(lng) {
    i18n.changeLanguage(lng)
    setSelectedLanguage(lng)
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

  function onBlogContent() {
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
  }

  useEffect(() => {
    onBlogContent()
  }, [location.pathname])

  return (
    <Container>
      <header>
        <Branding>
          <Link to="/" onClick={handleMenuClose}>
            J_
          </Link>
        </Branding>
      </header>

      <div className="nav-container">
        <nav>
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

          <ul>
            <li>
              <NavLink to="/about" onClick={handleMenuClose}>
                &lt;{t('menu.about')} /&gt;
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" onClick={handleMenuClose}>
                &lt;{t('menu.portfolio')} /&gt;
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={handleMenuClose}>
                &lt;{t('menu.contact')} /&gt;
              </NavLink>
            </li>
          </ul>

          <Social />
        </nav>
      </div>
    </Container>
  )
}
