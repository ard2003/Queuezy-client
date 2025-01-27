import React from 'react'
import { GoArrowRight } from "react-icons/go";
import { MdOutlineBloodtype } from "react-icons/md";
import { LuPill } from "react-icons/lu";
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='bg-[#252b61] font-sans rounded-[40px] p-10 relative overflow-clip' >

      <div className='flex justify-center flex-col gap-4'>
        <div className='flex justify-center'>
        <h1 className=' lg:text-[200px] text-6xl font-extrabold text-[#dbebff] tracking-normal'>Healthcare</h1>

        </div>
      <div className=' flex justify-around flex-row'>
        <div className=' flex flex-row gap-2 '>
          <div className='flex items-center'>
            <div className=' rounded-full bg-[#e7c2d4] text-2xl  lg:text-4xl p-1'><MdOutlineBloodtype/></div>
          </div>
          <div><p className=' text-3xl text-white'>Reduce HbA1c</p></div>
        </div>
        <div className=' flex flex-row gap-2 '>
          <div className='flex items-center'>
            <div className=' rounded-full bg-[#a3dac2] text-2xl  lg:text-4xl p-1 '><LuPill /></div>
          </div>
          <div><p className=' text-3xl text-white '>No more medications</p></div>
        </div>
        </div>
      </div>
      
    <div className='flex justify-center h-full w-full pt-36'>
    <Image src='/HeroDocter.jpg' alt='docterCutout' width={430} height={441} className='absolute  bottom-0 hidden lg:block'/>
    </div>
    <div className=' flex flex-col justify-between bottom-2 md:flex-row space-y-3 '>
        <div className='max-w-[330px] text-white font-medium'><p>IF  YOU&apos;RE LOOKING FOR A CREATIVE AND EASY WAY TO BUILD A WEBSITE, WOW! IS THE PERFECT SOLUTION.</p></div>
        <div className=' flex flex-row align-bottom  '>
        <div className=' rounded-full bg-[#e7c2d4] flex items-center justify-center w-14 h-14 text-2xl'><GoArrowRight/></div>
        <div className=' flex justify-center bg-[#e7c2d4] h-14 items-center p-5 rounded-full font-medium'><h5>Book Consultation</h5></div>
        <div className=' rounded-full bg-[#e7c2d4] flex items-center justify-center w-14 h-14 text-2xl'><GoArrowRight/></div>
        
        </div>
      </div >
    </div>
  )
}

export default Hero