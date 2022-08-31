import React from 'react'
import '../general/general.css'
import {GuestBook} from '../Data'

const guestBook = () => {

  return (
    
      GuestBook.map(item=>{
const {img1,img2,header_text,description,id,text,icon}=item

return(
<div className='container'>
<div className='info'>
            <h2>{header_text}</h2>
<div className='details_div'>
                <img src={img2} className="guest_Img" alt='guest image'/> 
                <div>
                    <h4>seelentag</h4>
                    <p> from Los Angelis, california</p>
                </div>
            </div>

            <div className='description'>
                <p>{description}</p>
             
            </div>
            <div className='dots'><span className='active' /> <span /></div>
  

</div>
        <div>
            <h2>{header_text}</h2>
        <div className='banner'>
             <img src={img1}  alt='guest image' />
        </div>
        </div>

</div>

)

      })
  


  )
}

export default guestBook
