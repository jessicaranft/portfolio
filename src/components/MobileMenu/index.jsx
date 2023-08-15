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

  return (
    <Container>
      <header>
        <Branding>
          <Link to="/">J_</Link>
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
              <NavLink to="/about">&lt;{t('menu.about')} /&gt;</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio">&lt;{t('menu.portfolio')} /&gt;</NavLink>
            </li>
            <li>
              <NavLink to="/contact">&lt;{t('menu.contact')} /&gt;</NavLink>
            </li>
          </ul>

          <Social />
        </nav>
      </div>
    </Container>
  )
}
