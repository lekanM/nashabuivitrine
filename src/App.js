import React from 'react';

//exporting components
import {Navbar,Home,About,Services,Works} from './components';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <Works/>
    </>
   
  )
}

export default App