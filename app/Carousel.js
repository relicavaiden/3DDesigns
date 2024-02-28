'use client'
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import Image from 'next/image';


// The carousel should be all 360 videos.
// Images will need to be snipped to be used
export default function Carousel() {

  const caro = [
    {
      url: 'WhirlpoolStarmie0121_35/oneStarmieSize.jpg'
    },
    {
      url: 'WhirlpoolStarmie0121_35/twoStarmieFront.jpg'
    },
    {
      url: 'WhirlpoolStarmie0121_35/threeStarmieRightFront.jpg'
    },
    {
      url: 'WhirlpoolStarmie0121_35/fourStarmieSide.jpg'
    },
    {
      url: 'WhirlpoolStarmie0121_35/fiveStarmieBackSide.jpg'
    },
    {
      url: 'WhirlpoolStarmie0121_35/sixStarmieBack.jpg'
    },
    {
      url: 'WhirlpoolStarmie0121_35/sevenStarmieBackLeft.jpg'
    },
    {
      url: 'WhirlpoolStarmie0121_35/eightStarmieLeftSide.jpg'
    },
    // {
    //   url: 'WhirlpoolStarmie0121_35/Starmie_Display.mp4'
    // }
  ]

  const [currentImage, setCurrentImage] = useState(0)
  
  const prevCaro = () => {
    const isFirstCaro = currentImage === 0;
    const newCaro = isFirstCaro ? caro.length - 1 : currentImage - 1;
    setCurrentImage(newCaro);
  };

  const nextCaro = () => {
    const isLastCaro = currentImage === caro.length - 1;
    const newCaro = isLastCaro ? 0 : currentImage + 1;
    setCurrentImage(newCaro);
  };

  const goToCaro = (caroIndex) => {
    setCurrentImage(caroIndex);
  };

  return (
    <div className='max-w-[900px] h-[850px] w-full m-auto py-16 px-4 relative group'>
      <div style={{backgroundImage: `url(${caro[currentImage].url})`}} 
      className='w-full h-full rounded-2xl bg-center bg-cover ease-in-out  duration-900'> 
      </div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-yellow-400 cursor-pointer'>
        <BsChevronCompactLeft onClick={prevCaro} size={35}/>
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-yellow-400 cursor-pointer'>
        <BsChevronCompactRight onClick={nextCaro} size={35}/>
      </div>
      <div className='flex top-4 justify-center py-2'>
        {caro.map((caro, caroIndex) => (
          <div key={caroIndex} onClick={() => goToCaro(caroIndex)} className='text-3xl cursor-pointer'>
            <RxDotFilled/>
          </div>
        ))}
      </div>
    </div>
  )
}
