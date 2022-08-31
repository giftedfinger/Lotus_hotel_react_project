import { icon } from '@fortawesome/fontawesome-svg-core'
import React from 'react'

import  BestList from './ourBest_List'
import '../general/general.css'
import img from '../../img/img-2.jpg'

const OurBest = () => {

  return (
    <section className='container  container_Ourbest'>
<div>

  <h2>OUR BEST</h2>
  <p>One of Catalina Island's hotels, Hotel Vista Del Mar is recognized as One
    of Avalon's leading hotels with gracious Island hospitality, thoughtful amenities and
    distance.
  </p>
  <div className='BestList'>

<BestList/>
      </div>

      </div>
      <div className=''>
      <img src={img} alt='image'></img>
      </div>
    </section>
    
  )
  
}

export default OurBest
