import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { Container, Branding, Languages } from './styles'
import { Social } from '../Social'

export function MobileMenu() {
  const { t, i18n } = useTranslation()
  const [selectedLanguage, setSelectedLanguage] = useState(null)

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
            >
              EN
            </button>
            <button
              onClick={() => changeLanguage('pt')}
              className={selectedLanguage === 'pt' ? 'selected' : ''}
            >
              PT
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
