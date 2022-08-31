import React from 'react'
import './accommodation.css'


import { Accommodation } from '../Data';

const Accomodation = () => {

  const data = Accommodation;
  
  return(
    // container main div
    <section id='accommodation'> 
<div className='Accomodation_header'>
      <h2>ACCOMMODATION</h2> <div className='dots'><span className='active'/> <span/></div>
        </div>
{/* container items container */}
     <div className='accomodate_container '>
   
  { 
// map 
data.map((item)=>{
  const{id,img,name,text,currency,price,day,details,string,icon}=item
return(
// item conainer
    <div className='accommodation' key={item.id} >
     <figure>
   <img src={img} alt='image' />
    </figure>
    <div className='text_div'>
   <h3>{name}</h3>
  
  <p>{text}</p>
    </div>
  <div className='details'>
        <div><p>{currency}{price} <span>/{day}</span></p>
        
        </div>

      <div><p>{details}<span>{icon}</span></p></div>
  </div>
   
</div>

)


})

}
</div>
    </section>

  )
}


export default Accomodation
