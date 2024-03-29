import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { About } from '../pages/About'
import { Portfolio } from '../pages/Portfolio'
import { Contact } from '../pages/Contact'
import { ThankYou } from '../pages/ThankYou'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { Blog } from '../pages/Blog'
import { BlogPost } from '../pages/BlogPost'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/post/:id" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Route>
    </Routes>
  )
}
