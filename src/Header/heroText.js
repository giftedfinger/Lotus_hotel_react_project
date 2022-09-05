import React from 'react'

// import '../img/'
const heroText = () => {
  return (
    <div>
        <div className='heroText'>
          {/* <img src='../../img'></img> */}
        <h1 className='heroAnimAtion'>EACH HOTEL IS  <span>UNIQUE 60%</span> JUST LIKE YOU</h1>
          
          </div>
         
         
          <div className='bottom_hero'>
              <div className='center_div'>
<div className='bottom_hero_container'>
              <div className='Room_Rate_div'>
                      <img src={require('../img/icon-1.png')} alt='bottom_icon' ></img>
                <p> Room & Rate</p>
              </div>
              
              <div className='ArrivalDate '>
                  <div><p>Arrival date</p></div>
                  <div><p>Depature date</p></div>
                  <div><p>Adult</p></div>
                  <div><p>Children</p></div>
                  <div><p>Find best rate</p></div>
                  
              </div>
          </div>
          </div>
          </div>

    </div>
  )
}

export default heroText
