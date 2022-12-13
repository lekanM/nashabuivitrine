import React from 'react';
import { socialMediaLink } from '../utils/constante';

const Foot = () => {
  return (
    <div className='foot'>
        <div>
      {/*   <img src='images/logo.png' alt='logo' /> */}
      <h1>ABUI NASH</h1>
            <p>"We make art through the simplest means possible"</p>
            {
                socialMediaLink.map((list,key)=>(
                    <a key={key} href={list.link} ><i>{list.icon}</i></a>
                ))
            }
           <p>&copy;2022 by<a href='#sd'>LekanM</a></p>
        </div>
    </div>
  )
}

export default Foot