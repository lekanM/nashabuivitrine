import React from 'react';
import WorksCard from './WorksCard';
import {works} from '../utils/constante'

const Works = () => {
  return (
    <div className='works'>
        <h1>Works</h1>
        <div  >
        <section className='works-cardRow'>
          <div className='works-cardColumn'>
            <img src='images/workspics/works2.jpg' alt='' />
            <img src='images/workspics/first.jpg' alt='' />
          </div>
          <div className='works-cardColumn'>
            <img src='images/workspics/work3.jpg' alt='' />
            <img src='images/workspics/works2.jpg' alt='' />
          </div>
          <div className='works-cardColumn'>
            <img src='images/workspics/first.jpg' alt='' />
            <img src='images/workspics/works1.jpg' alt='' />
            <img src='images/workspics/first.jpg' alt='' />
          </div>
          <div className='works-cardColumn'>
            <img src='images/workspics/works1.jpg' alt='' />
            <img src='images/workspics/works2.jpg' alt='' />
          </div>
        </section>
        </div>
        
    </div>

  )
}

export default Works