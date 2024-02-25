import React from 'react';
import Image from 'next/image';

import Gastly from '../public/Media/GastlySize.jpg';
//import GastlyVid from '../public/Media/GastlyVideo.mp4';
import Starmie from '../public/WhirlpoolStarmie0121_35/twoStarmieFront.jpg'

const Postcards = () => {
  return (
        <div className='flex min-h-screen flex-col justify-center bg-slate-100'>
            <div className='group h-96 w-96 [perspective:1000px]'>
                <div className='relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
                    <div className='absolute inset-0'>
                        <Image className='h-full w-full rounded-xl shadow-lg shadow-black/40 [backface-visibility:hidden]' src={Gastly} />
                        <h1 className='text-3xl font-bold'>Ghastly 2 1/2"</h1>
                            <p>Short description one</p>
                    </div>
                    <div className='absolute inset-0 h-full w-full rounded-xl bg-black/40 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                        <div className='flex min-h-full flex-col items-center justify-center'>
                            <Image className='h-full w-full' src={ Starmie } />
                            {/* <video width="320" height="240" controls preload='none' >
                                <source src='../public/Media/GastlyVideo.mp4' type='video/mp4' />
                                Your browser does not support the video
                            </video> */}
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Postcards