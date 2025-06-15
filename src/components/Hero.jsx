import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
<div className='flex flex-col sm:flex-row border border-gray-400'>
  {/* Hero left side */}
  <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
    <div className='text-[#414141]'>
      
      {/* OUR BESTSELLERS Section */}
      <div className='flex items-center gap-2'>
        <div className='h-[1.5px] w-8 md:w-11 bg-[#414141] mt-1'></div>
        <p className='font-medium text-sm md:text-base leading-none'>OUR BESTSELLERS</p>
      </div>

      {/* Heading */}
      <h1 className='text-3xl sm:py-3 lg:text-5xl leading-relaxed prata-regular'>Latest Arraivals</h1>

      {/* SHOP NOW Section */}
      <div className='flex items-center gap-2'>
        <p className='font-medium text-sm md:text-base leading-none'>SHOP NOW</p>
        <div className='h-[1.5px] w-8 md:w-11 bg-[#414141] mt-1'></div>
      </div>

    </div>
  </div>

  {/* Hero Right side */}
  <img className='w-full sm:w-1/2 object-cover' src={assets.hero_img} alt="Hero" />
</div>

  )
}

export default Hero