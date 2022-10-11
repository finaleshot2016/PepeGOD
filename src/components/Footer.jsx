import React from 'react'
import './dev.css';
import terminal from '../assets/copyright.png'
const Footer = () => {
  return (
    <div className='bg-[#85ce56] text-white justify-center py-4'>
        <div className='text-center text-white justify-center'>
            <div>

            <img className='justify-center' src={terminal} alt="/" />
            </div>
        </div>
    </div>
  )
}

export default Footer
