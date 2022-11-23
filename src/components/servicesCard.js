import React from 'react'

const servicesCard = ({path,title,serviceDetail}) => {
  return (
    <div className='card'>
      <img src={path} alt='hi'/>
      <section>
        <h3>{title}</h3>
        <p>{serviceDetail}</p>
      </section>
    </div>
  )
}

export default servicesCard