  import React from 'react';

  // accomodation sectoio
  import Accomodation from './body_components/Accomodation/Accomodation';

  // guest section
  import GuestBook from './body_components/GuestBook/guestBook'

  // about section
import About from './body_components/About/about'

// our best section
import OurBest from './body_components/Our_best/OurBest'




  const Body_Section= () => {
    return (
      <div>
        <section>
        <Accomodation />
        </section>

        <section> 
          <GuestBook />
       </section> 

        <section> 
          <About />
       </section >  

       <section>
        <OurBest />
       </section >
    

    
      </div>
    )
  }

  export default Body_Section
