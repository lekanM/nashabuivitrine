import React from 'react';

const Works = () => {
  return (
    <div className='works'>
        <h1>Works</h1>
        <div className='container' >
        <section className='works-cardRow'>
          <div className='works-cardColumn'>
            <img src='images/workspics/works2.jpg' alt='you' />
            <img src='images/workspics/first.jpg' alt='you' />
          </div>
          <div className='works-cardColumn'>
            <img src='images/workspics/work3.jpg' alt='you' />
            <img src='images/workspics/works2.jpg' alt='you' />
          </div>
          <div className='works-cardColumn'>
            <img src='images/workspics/first.jpg' alt='you' />
            <img src='images/workspics/works1.jpg' alt='you' />
            <img src='images/workspics/first.jpg' alt='you' />
          </div>
          <div className='works-cardColumn'>
            <img src='images/workspics/works1.jpg' alt='you' />
            <img src='images/workspics/works2.jpg' alt='you' />
          </div>
        </section>
        </div>
        
    </div>

  )
}

export default Works