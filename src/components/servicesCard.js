import React from 'react'

const servicesCard = ({path,title,serviceDetail,icon}) => {
  return (
    <div className='card'>
      <span>{icon}</span> 
      <img src={path} alt='hi'/>
      <section>
        <h3>{title}</h3>
        <p>{serviceDetail}</p>
      </section>
    </div>
  )
}

export default servicesCard