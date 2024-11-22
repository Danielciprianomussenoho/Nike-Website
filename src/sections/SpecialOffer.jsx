import React from 'react'
import Button from '../components/Button'
import { offer } from '../assets/images'
import { arrowRight } from '../assets/icons'

const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
       <div className='flex-1'>
        <img src={offer} alt="" width={773} height={687} className='object-contain w-full '/>
       </div>
       <div className="flex flex-1 flex-col">
                <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg ">
                    <span className="text-coral-red">Special</span> Offer
                </h2>
                <p className="mt-4 lg:max-w-lg info-text">
                    Ensuring premiu comfort and style our metculously crafted footwear is designed
                    to elevate your experience, providing you unmatched quality, innovation, and a
                    touch of elegance.
                </p>

                <p className="mt-6 lg:max-w-lg info-text">
                    Navigate a realm of possiblities designed to fulfill your unique desires, supassing the loftiest expectations. Your journey with us is nothing short of exceptional, Our dedication to detail and excellence ensures yoursatisfaction
                </p>
                <div className="mt-11 flex flex-wrap gap-4">
                    <Button label="Shop now" iconURL={arrowRight} />
                    <Button label="Learn More" backgroundColor = "bg-white" borderColor = "border-slate-gray" textColor = "text-slate-gray"/>
                </div>
            </div>
    </section>
  )
}

export default SpecialOffer