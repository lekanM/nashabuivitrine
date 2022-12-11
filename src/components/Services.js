import React from 'react'
import { services } from '../utils/constante';
import ServicesCard from './servicesCard';

const Services = () => {
  return (
    <div id='services' className='services'>
        <h1 className='headerh1'>Services</h1>
        <div className='services-content'>
        {services.map((service,idx)=>(
          <ServicesCard key={idx}
          path={service.imagePath} 
          title={service.title} 
          serviceDetail={service.serviceDetail} 
          icon={service.icon}
          />
        ))}
        </div>
    </div>
  )
}

export default Services