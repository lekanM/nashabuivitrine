import React from 'react';
import {userDetail} from '../utils/constante'

const Contact = () => {
    console.log('fi')
  return (
    <>
    <h1 className='headerh1'>Contact</h1>
    <div id='contact'>
        <div className='location'>
            <ul >
                {userDetail.map((list,key)=>(
                        <li key={key}  >
                            <i className='list-icon'>{list.icon}</i> 
                            <span>{list.detail}</span>
                            </li>  
                    ))}
                        </ul>
        </div>
        <div className='form-shadow' >
        <div className='form' >
            <section className='formsection'>
                <span>Name</span>
                <input/>
            </section>
            <section className='formsection'>
                <span>Email</span>
                <input/>
            </section>
        <section>
            <textarea/>
        </section>

        </div>
       <div className='form-section'><button className='contactBtn' >Send message</button></div></div>
    </div>
    </>
    
  )
}

export default Contact