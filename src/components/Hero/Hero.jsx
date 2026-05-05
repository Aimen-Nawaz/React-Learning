import React from 'react'
import Navbar from './Navbar'
import Story from './Story'

const Hero = () => {
  return (

    <div className='hero'>
        
        
        <Navbar />

        <div className="text">
        <h1>Garden of Distinction</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quibusdam unde pariatur dolor rem reprehenderit nulla consectetur nihil nostrum, iste libero ut enim perspiciatis, illo harum reiciendis molestiae culpa beatae?</p>
      </div>

      <div className="buttons">
        <button className='btn'>Get Started</button>
        <button className='btn'>Learn More</button>
      </div>
      <Story/>
    </div>
    
  )
}

export default Hero
