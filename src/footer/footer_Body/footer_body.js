
import React from 'react'
import logoImg from '../../img/logo-footer.png'
 import './footer_body.css'

import { FaTripadvisor, FaEnvelope } from 'react-icons/fa';
import { TiLocationOutline } from "react-icons/ti";
import { BsTelephone, BsCircleHalf } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";

const footer_body = () => {
  return (
    <>
          <section className='footer_body'>
            <div className='center_div'>
              <div className='Lotue_address'>
                      <img src={logoImg}/>
                  <div className='address_content'>
                          <div> <p><TiLocationOutline className='adress_icon'/> 225 Beach street,Australian</p></div>
                          <div><p><BsTelephone className='adress_icon' />   1-548-854-889</p></div>
                          <div > <p><FaEnvelope className='adress_icon' />   hello@theLotushotel.com</p></div>
                  </div>

              </div>
             

                  <div className='lotus_content'>
                  <div >
                    <h4>PAGE SITE</h4>
                    <p>Guest Book</p>
                      <p>Gallary</p>
                      <p>Restaurant</p>
                      <p>Event </p>
                  </div>

                  <div>
                      <h4>ABOUT</h4>
                          <p>About</p>
                      <p>Blog</p>
                      <p>Contact Us</p>
                      <p>Comming Soon</p>
                  </div>

                  {/* tripadvisor */}
                  <div>

                      <h4>TRIPADVISOR</h4>
                      <p>Now with hotel revies by </p>
                      <p id='tripAdvisor'><FaTripadvisor className='tripAdvisor_icon'/>  tripadvisor</p>

{/* tripadvisor dots icons */}

                          <div c><p><GoPrimitiveDot className='dot_icon'/>
                              <GoPrimitiveDot className='dot_icon' />
                          <GoPrimitiveDot className='dot_icon' />
                              <GoPrimitiveDot className='dot_icon' />
                              <BsCircleHalf className='dot_icon' />
                              </p>
                      </div>


                  </div>
              </div>
              </div>

          </section>
    </>
  )
}

export default footer_body
