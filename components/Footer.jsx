import React from 'react'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className='footer-container'>
      <p>{year} COOL Headphones | All rights reserved</p>
      <p className='icons'>
        <AiOutlineInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer