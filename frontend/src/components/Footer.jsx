import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* left section */}
        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam 
            fuga quasi magnam sed,itaque rerum ipsum dolor quas officia 
            eius maiores, facilis voluptate.</p>

        </div>
        {/* center section */}
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About</li>
            <li>Contact us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/* right section */}
        <div>
        <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+252 61000000</li>
            <li>amiinali29@gmail.com</li>
          </ul>
        </div>

        </div>
        <hr />
        {/* ----- copyright text---- */}
        <div>
          <p className='py-5 text-sm text-center'> Copyright 2025 @Prescripto - All Reserved</p>
        </div>
    </div>
  )
}

export default Footer