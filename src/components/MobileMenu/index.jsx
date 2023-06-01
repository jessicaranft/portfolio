import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Container, Branding, Languages } from './styles';
import { Social } from '../Social';

export function MobileMenu() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Container>
      <header>
        <Branding>
          <Link to="/">
            J_
          </Link>
        </Branding>
      </header>

      <div className="nav-container">
        <nav>
        <Languages>
          <button onClick={() => changeLanguage('en')}>EN</button>
          <button onClick={() => changeLanguage('pt')}>PT</button>
        </Languages>

          <ul>
            <li>
              <Link to="/about">&lt;{t('menu.about')} /&gt;</Link>
            </li>
            <li>
              <Link to="/portfolio">&lt;{t('menu.portfolio')} /&gt;</Link>
            </li>
            <li>
              <Link to="/contact">&lt;{t('menu.contact')} /&gt;</Link>
            </li>
          </ul>

          <Social />
        </nav>
      </div>
    </Container>
  );
}