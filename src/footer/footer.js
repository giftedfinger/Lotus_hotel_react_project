import React from 'react'
import './footer.css'
import footerLogo from '../img/logo-footer.png'
import { FaFacebookF, FaTwitter, FaGooglePlusG } from 'react-icons/fa';
import { TiSocialGooglePlus, TiSocialInstagram, TiSocialPinterestCircular } from "react-icons/ti";




const Footer = () => {
  return (
    <div className='footer_container'>
      
      <section className='footer_top'>
        <div className='center_div'></div>
        <div> <h3>NEWS & OFFERS</h3></div>
        <form>

            <input type=" email" placeholder='Your email Address' />
          <button>SIGN UP</button>
        </form>

       
        <div className='icons_container'>
          <div className='icon_div' > <TiSocialPinterestCircular className='icon' /></div>
          <div className='icon_div' > <FaFacebookF className='icon' /></div>
          <div className='icon_div' > <FaTwitter className='icon' /></div>
          <div className='icon_div' > <TiSocialGooglePlus className='icon' /></div>
          <div className='icon_div' >  <TiSocialInstagram className='icon' /></div>
        
        </div>
      </section>

<section className='footer_body'>
<div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>

</section>
<section className='bottom_footer'>

</section>

      </div>

  )
}

export default Footer
