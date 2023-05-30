import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Portfolio } from '../pages/Portfolio';
import { Contact } from '../pages/Contact';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}