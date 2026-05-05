import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Hero from './components/Hero/Hero'
import Story from './components/Hero/Story'
import Navbar from './components/Hero/Navbar'
import './styel/LandScaping.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Hero />
      </div>
    </>
  )
}

export default App
