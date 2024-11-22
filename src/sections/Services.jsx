import React from 'react'
import { services } from '../constants'
import ServiceCard from '../components/ServiceCard'

const Services = () => {
  return (
    <section className='max-container flex gap-9 justify-center flex-wrap'>
        {services.map((service)=>(
          <ServiceCard key={service.label} {...service} />
        ))}
    </section>
  )
}

export default Services