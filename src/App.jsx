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




function App() {
  const [count, setCount] = useState(0)

  return (
    <PageLayout>
      <Hero />
      <About />
      <Choose />
      <Services />
      <Pricing/>
      <Gallery/>
      <Testimonial/>
      <FAQ/>    
      <Blog/>
      <Contact/>
      </PageLayout>
  )
}

export default App
