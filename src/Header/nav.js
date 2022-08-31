import React from 'react'


const Nav = () => {
    return (

        <div className='nav_container'>
            <div className='center_div '>
                <div className='Register'> 

                    <div className=' Register_gap userDetails'>  
                        <p>18&#8451;</p>  <p>225 beach street, australia</p>
                      <p>1-548-854-8898</p>
                      </div> 

                    <div className=' Register_gap regDetails'>
                    <a className='.Rgister_Login'>Login</a> 
                    <a className='.Rgister_Login'>Register</a> 
                    <p className='.Rgister_Login'>USD</p>
                    <p className='.Rgister_Login'>ENG</p>
                 </div>
                 </div>
                 </div>

        <nav className='nav'>
            <div className='center_div'>
            <img src={require('../img/logo-header.png')} alt='logo' className='logo'></img>
           
            <ul className='nav_links ' id='nav_links'>
                            
                            <div className='nav_register_login'>
                            <a>Login</a>
                            <a>register</a>
                            </div>
                       
                        

                <li><a>HOME </a></li>
                <li><a>ABOUT </a></li>
                <li><a>RESTAURANT</a></li>
                <li><a>RESERVATION</a></li>
                <li><a>PAGE</a></li>
                <li><a>GALLERY </a></li>
                <li><a>BLOG</a></li>
                <li><a>CONTACT</a></li>

                
            </ul>
               

                    <span className='toggle_icon'> &#9776;</span>
      
            </div>
        </nav>

        </div>
    )
}

export default Nav
