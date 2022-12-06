import React from 'react';

//exporting components
import {Navbar,About,Services,Works,Contact,Foot} from './components';

function App() {
  return (
    <>
      <Navbar/>
      <About/>
      <Services/>
       <Works/>
      <Contact/> 
      <Foot/>
    </>
   
  )
}

export default App