import React from 'react'
import Navbar from '../PageLayout/Navbar'
import Story from './Story'
import About from '../About Us/About'
import { hero, text, buttons, btn } from "../../styel/LandScaping.module.css"
const Hero = () => {
  return (

    <div className={hero}>

      <div className={text}>
        <h1>Garden of Distinction</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quibusdam unde pariatur <br />iste libero ut enim perspiciatis,
          illo harum reiciendis molestiae culpa beatae?
        </p>
      </div>

      <div className={buttons}>
        <button className={btn}>Get Started</button>
        <button className={btn}>Learn More</button>
      </div>

      <Story />


    </div>


  )
}

export default Hero
