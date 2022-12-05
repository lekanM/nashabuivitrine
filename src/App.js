import React from 'react';

//exporting components
import {Navbar,About,Services,Works,Contact} from './components';

function App() {
  return (
    <>
      <Navbar/>
      <About/>
      <Services/>
       <Works/>
      <Contact/> 
    </>
   
  )
}

export default App