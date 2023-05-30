import { Link } from 'react-router-dom';

import { Container, Branding } from './styles';
import { Social } from '../Social';

export function MobileMenu() {
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
          <ul>
            <li>
              <Link to="/about">&lt;About /&gt;</Link>
            </li>
            <li>
              <Link to="/portfolio">&lt;Portfolio /&gt;</Link>
            </li>
            <li>
              <Link to="/contact">&lt;Get in touch /&gt;</Link>
            </li>
          </ul>

          <Social />
        </nav>
      </div>
    </Container>
  );
}