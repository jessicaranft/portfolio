import { useEffect, useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { TfiClose, TfiMenu } from 'react-icons/tfi'
import { Link, NavLink } from 'react-router-dom'

import brFlag from '../../assets/br-flag.svg'
import ukFlag from '../../assets/uk-flag.svg'
import { MobileMenu } from '../../components/MobileMenu'
import { Social } from '../Social'
import {
  Branding,
  Container,
  Languages,
  Menu,
  MobileMenuButton,
} from './styles'

export function Header() {
  const [visibleMenu, setVisibleMenu] = useState(false)
  const menuRef = useRef(null)

  function closeOpenMenus(e) {
    if (menuRef.current && visibleMenu && !menuRef.current.contains(e.target)) {
      setVisibleMenu(false)
    }
  }

  document.addEventListener('mousedown', closeOpenMenus)

  const { t, i18n } = useTranslation()
  const [selectedLanguage, setSelectedLanguage] = useState(null)

  function changeLanguage(lng) {
    i18n.changeLanguage(lng)
    setSelectedLanguage(lng)
  }

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
              <li>
                <NavLink to="/blog">{t('menu.blog')}</NavLink>
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

      <div ref={menuRef}>
        <MobileMenu
          visibleMenu={visibleMenu}
          setVisibleMenu={setVisibleMenu}
          ref={menuRef}
        />
      </div>

      {visibleMenu === false ? (
        <MobileMenuButton>
          <TfiMenu
            size={36}
            onClick={() => {
              setVisibleMenu(true)
            }}
          />
        </MobileMenuButton>
      ) : (
        <MobileMenuButton>
          <TfiClose
            size={36}
            onClick={() => {
              setVisibleMenu(false)
            }}
          />
        </MobileMenuButton>
      )}
    </Container>
  )
}
