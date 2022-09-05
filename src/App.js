
import './App.css';

// header section
import Hero from './Header/hero';
// import bod from './boder';
// body section
import Body from './body_Section';

// footer
import Footer from './footer/footer';

//media  query 

import './mediaQuary/headerMediaQuary.css';


function App() {

  return (
    
    <div className="App">
   
 <Hero />
      <div className='center_div'>
<Body/>   

 </div>
      <Footer />

    

    </div>
  );

}

export default App;
