import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { Container, Branding, Languages } from './styles'
import { Social } from '../Social'
import brFlag from '../../assets/br-flag.svg'
import ukFlag from '../../assets/uk-flag.svg'

export function MobileMenu({ visibleMenu, setVisibleMenu }) {
  const { t, i18n } = useTranslation()
  const [selectedLanguage, setSelectedLanguage] = useState(null)

  function changeLanguage(lng) {
    i18n.changeLanguage(lng)
    setSelectedLanguage(lng)
  }

  useEffect(() => {
    document.body.style.overflowY = visibleMenu ? 'hidden' : 'auto'
  }, [visibleMenu])

  return (
    <Container isOpen={visibleMenu}>
      <header>
        <Branding>
          <Link
            to="/"
            onClick={() => {
              setVisibleMenu(false)
            }}
          >
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
              <NavLink
                to="/about"
                onClick={() => {
                  setVisibleMenu(false)
                }}
              >
                &lt;{t('menu.about')} /&gt;
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                onClick={() => {
                  setVisibleMenu(false)
                }}
              >
                &lt;{t('menu.portfolio')} /&gt;
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={() => {
                  setVisibleMenu(false)
                }}
              >
                &lt;{t('menu.contact')} /&gt;
              </NavLink>
            </li>
            {/*
            <li>
              <NavLink
                to="/blog"
                onClick={() => {
                  setVisibleMenu(false)
                }}
              >
                &lt;{t('menu.blog')} /&gt;
              </NavLink>
            </li>
            */}
          </ul>

          <Social />
        </nav>
      </div>
    </Container>
  )
}
