import React from 'react'
import { Best } from '../Data'
import './OurBest.css'

const ourBest_List = () => {
  return (
 
      Best.map(item=>{
const {id, text, icon}=item

          return(

          <div className='List_container'>

              <div key={id}  className='bests'>
             <img src={icon} /> <p>{text}</p>

              </div>


          </div>
          )
})
      
    )}
export default ourBest_List
