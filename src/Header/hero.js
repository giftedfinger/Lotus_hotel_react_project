import React from 'react'
import Nav from './nav'
import './hero.css';
import '../mediaQuary/headerMediaQuary.css';

// media quary

 import HeroText from './heroText'



const Hero = () => {
    console.log('yes')
  return (
    <header className='header'> 
  <Nav/>
  <HeroText/>
    </header>
  )
}

export default Hero
