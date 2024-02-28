import React from 'react'
import { Icons } from 'react-icons';
import { AiFillInstagram } from 'react-icons/ai';
import { BiLogoEtsy } from 'react-icons/bi';

const Footer = () => {
  return (
    <div className='flex items-center justify-between'>
        <h1 className='text-3xl bold'>Designs by Rocko</h1>
        <ul className='flex items-center space-x-8'>
            <li><a href='https://www.instagram.com/3d_1_creations/'><AiFillInstagram size={48}/></a></li>
            <li><a href='https://www.etsy.com/shop/3dcreationsbyrock/?etsrc=sdt'><BiLogoEtsy size={48}/></a></li>
        </ul>
    </div>
  )
}

export default Footer