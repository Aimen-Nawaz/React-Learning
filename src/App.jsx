import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from '../public/images/hero.png'
import img from '../public/images/about.png'
import './App.css'
import Hero from './components/Hero/Hero'
import Story from './components/Hero/Story'
import Navbar from './components/PageLayout/Navbar'
import './styel/LandScaping.module.css'
import Footer from './components/PageLayout/Footer'
import './styel/Navbar.module.css'
import './styel/Footer.module.css'
import About from './components/About Us/About'
import Choose from './components/About Us/Choose'
import Services from './components/Services/Services'
import PageLayout from './components/PageLayout/PageLayout'
import Pricing from './components/Pricing/pricing'
import FAQ from './components/FAQ/FAQ'
import Blog from './components/Blog/Blog'
import Gallery from './components/Gallery/Gallery'
import Testimonial from './components/Testimonial/Testimonial'
import './styel/Contact.module.css'
import Contact from './components/Contact/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Effect from './components/Effect'




function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <PageLayout>
        <Routes>
          <Route index element={
            <>
              <Hero />
              <About />
              <Choose />
              <Services />
              <Pricing />
              <Gallery />
              <Testimonial />
              <FAQ />
              <Blog />
              <Contact />
            </>
          }
          />
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/choose" element={<Choose />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/blog" element={<Blog />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/effect' element={<Effect />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  )
}

export default App
