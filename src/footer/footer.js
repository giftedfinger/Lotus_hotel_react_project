import React from 'react'
import './footer.css'
import Footer_top from './footer_top/footer_top';
import Footer_body from './footer_Body/footer_body';
import { FaRegCopyright } from 'react-icons/fa';






const Footer = () => {
  return (
    <div className='footer_container'>
<Footer_top />
<Footer_body/>

      <div className='bottom_footer'><p>
        <FaRegCopyright  className='copyRight_icon'/>  <span> 2016 </span>  Lotus Hote All right reservsed</p> 
      
      </div>
      </div>

  )
}

export default Footer
