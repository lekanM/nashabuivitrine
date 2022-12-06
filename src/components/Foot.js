import React from 'react';
import { socialMediaLink } from '../utils/constante';

const Foot = () => {
  return (
    <div className='foot'>
        <div>
            <img src='images/logo.png' alt='logo'/>
            <p>"I love to draw faces. Each face, to me, tells
             an intriguing story regardless of age, gender, race
              or background"</p>
            {
                socialMediaLink.map((list,key)=>(
                    <a key={key} href={list.link} ><i>{list.icon}</i></a>
                ))
            }
        </div>
    </div>
  )
}

export default Foot