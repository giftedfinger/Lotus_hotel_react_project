import React from 'react'
import './footer_top.css'
// import footerLogo from '../img/logo-footer.png'
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaEnvelope } from 'react-icons/fa';
import { TiSocialGooglePlus, TiSocialInstagram, TiSocialPinterestCircular } from "react-icons/ti";



const footer_top = () => {
  return (
<>
          
          <section className='footer_top'>
              

              <div className='message'> <span id='message_icon'><FaEnvelope/></span> <h3>NEWS & OFFERS</h3></div>

              <form>
                  <input type=" email" placeholder='Your email Address' />
                  <button>SIGN UP</button>
              </form>


              <div className='icons_container'>
                  <div className='icon_div' > <TiSocialPinterestCircular className='icon pinterest' /></div>
                  <div className='icon_div' > <FaFacebookF className='icon' /></div>
                  <div className='icon_div' > <FaTwitter className='icon' /></div>
                  <div className='icon_div' > <TiSocialGooglePlus className='icon pinterest' /></div>
                  <div className='icon_div' >  <TiSocialInstagram className='icon pinterest' /></div>
              </div>
          </section>

      
          {/* <section className='bottom_footer'>

          </section> */}
    
      </>
  
  )
}

export default footer_top
