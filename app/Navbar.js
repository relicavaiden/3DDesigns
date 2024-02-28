"use client";
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import About from './About';

const Navbar = () => {

    const [isClick, setClick] = useState(false);

    const toggleNavbar = () => {
        setClick(!isClick)
    }

  return (



    <>
    <nav className='bg-black'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between h-16'>
                <div className='flex items-center'>
                    <div className='flex-shrink-0'>
                        <a href='/'className='text-white'>
                            3D Designs
                        </a>
                    </div>
                </div>
                <div className='hidden md:block'>
                    <div className='ml-4 flex items-center space-x-4'>
                        {/* // The home button will carry the color scheme that was requested for the page gold, navy, black */}
                        <a href='/' className='text-white block hover:bg-green-500 hover:text-black rounded-lg p-2 '>
                            Home
                        </a>
                        <a href='/' className='text-white block hover:bg-green-500 hover:text-black rounded-lg p-2 '>
                            Shop
                        </a>
                        <a href='/' className='text-white block hover:bg-green-500 hover:text-black rounded-lg p-2 '>
                            My Designs
                        </a>
                        <Link href="./About" className='text-white block hover:bg-green-500 hover:text-black rounded-lg p-2 '>
                            About Me
                        </Link>
                        <a href="/Contact" className='text-white hover:bg-green-500 hover:text-black rounded-lg p-2 '>
                            Contact
                        </a>
                    </div>
                </div>
                <div className='md:hidden flex items-center'>
                    <button
                    className='inline-flex items-center justify-center p-2 rounded-md text-white  hover:text-white focus:outline-none focus-ring-2 focus:ring-inset focus:ring-white' onClick={toggleNavbar}
                    >
                        {isClick ? (
                            <svg
                            className='h-6 w-6'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                            >
                                <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        ): (
                            <svg
                            className='h-6 w-6'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                            >
                                <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d ="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </div>
        {isClick && (
            <div className='md:hidden'>
                <div className='px-2 pb-2 pt-3 space-y-1 sm:px-3'>
                <a href='/' className='text-white hover:bg-white hover:text-black rounded-lg p-2 '>
                            Home
                        </a>
                        <a href='/' className='text-white block hover:bg-white hover:text-black rounded-lg p-2 '>
                            Shop
                        </a>
                        <a href='/' className='text-white block hover:bg-white hover:text-black rounded-lg p-2 '>
                            My Designs
                        </a>
                        <a href='/' className='text-white block hover:bg-white hover:text-black rounded-lg p-2 '>
                            About Me
                        </a>
                        <a href='/' className='text-white block hover:bg-white hover:text-black rounded-lg p-2 '>
                            Contact
                        </a>
                </div>
            </div>
        )}
    </nav>
    </>
  )
}

export default Navbar