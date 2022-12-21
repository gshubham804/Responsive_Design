import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <>
    <div className="hero-main">
        <div className="hero-submain">
        <h1>This is Circular</h1>
        <p>Lorem ipsum dolor sit amet, consectetur.</p>
        <div className="hero-button-cont">
          <div className='hero-button hero-button-start'>
        <button>Start</button>
        </div>
        <div className="hero-button hero-button-pause">
        <button>Pause</button>
        </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default HeroSection