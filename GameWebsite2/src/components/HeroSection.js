import React from 'react';
import '../App.css';
import { Button } from './Button';

import './HeroSection.css';

import vid from '../components/vid/video-1.mp4'



function HeroSection() {
  return (
    <div className='hero-container'>
       <video src={vid} autoPlay loop muted />
         





      <h1>The Last Fox(最後の狐)</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          LET'S PLAY
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          予告編を見てね <i className='fas fa-play-circle'/>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;

