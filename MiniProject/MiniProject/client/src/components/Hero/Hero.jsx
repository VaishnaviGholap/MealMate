import React from 'react'
import './Hero.css'
import hero from '../Assets/hero.png'

export const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
        <h2>PLAN YOUR MEAL WITH US....</h2>
        <div>
          <br></br>
          <br></br>
          <h5>What's for Dinner?</h5>
            <p>Don't say Hmm...Say Mmm..!</p>
        </div>
        </div>
        <div className="hero-right"></div>
        <img src={hero}alt=''/>
    </div>
  )
}
export default Hero