import React from 'react';
import '../App.css';
import { Button } from './Button';

import './TestSection.css';

import vid from '../components/vid/Trailer.mp4'



function TestSection() {
  return (
    <div className='herocontainer'>
       <video src={vid} autoPlay loop  />
    </div>
  );
}

export default TestSection;

