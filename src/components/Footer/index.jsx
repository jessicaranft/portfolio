import { useState } from 'react';

import { Container } from './styles';
import { Social } from '../Social';

export function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  return (
    <Container>
      <div>
        &copy; {year} All rights reserved.
      </div>
    
      <Social />

    </Container>
  );
}