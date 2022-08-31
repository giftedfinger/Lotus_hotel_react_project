import React from 'react'
// import './about.css'
import '../general/general.css'
import {About} from '../Data'

const about = () => {

  return (
    
      About.map(item=>{
const {img1,header_text,description,id,text,icon}=item

return(
<section className='about container'>

        <div>
        <div className='banner'>
             <img src={img1}  alt=' image' />
        </div>
        </div>

        <div className='info'>
            <div className='about_details'>
            <h2>{header_text}</h2>
            <p>{text}</p>
          </div>

            <div className='description'>
                <p>{description}</p>

            </div>
            <button>READ MORE</button>


        </div>

</section>

)

      })
  


  )
}

export default about
