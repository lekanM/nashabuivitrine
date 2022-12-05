import React from 'react';

const Works = () => {
  return (
    <div id='works' className='works'>
        <h1 className='headerh1'>Works</h1>
        <div className='workcontainer' >
        <section className='works-cardRow'>
          <div className='works-cardColumn'>
            <img src='images/nashpic/portrait7.png' alt='you' />
            <img src='images/nashpic/portrait8.png' alt='you' />
          </div>
          <div className='works-cardColumn'>
            <img src='images/nashpic/portrait6.png' alt='you' />
            <img src='images/nashpic/portrait3.png' alt='you' />
          </div>
          <div className='works-cardColumn'>
            <img src='images/nashpic/portrait10.png' alt='you' />
            <img src='images/nashpic/portrait9.png' alt='you' />
          </div>
          <div className='works-cardColumn'>
            <img src='images/nashpic/portrait4.png' alt='you' />
            <img src='images/nashpic/portrait5.png' alt='you' />
          </div>
        </section>
        </div>
        
    </div>

  )
}

export default Works