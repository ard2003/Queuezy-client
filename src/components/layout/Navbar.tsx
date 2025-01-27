import React from 'react'
import { CiSearch } from "react-icons/ci";
import { MdOutlineLocationOn } from "react-icons/md";


const Navbar = () => {
  return (
    <div className='bg-white md:py-5 md:px-36 font-sans'>
         <div className='bg-[#F6F7F8] h-24 text-black  md:flex md:justify-between items-center px-5 font-semibold rounded-2xl cursor-pointer hidden '>
         <p>QueEzzy</p>
         <div className='flex items-center space-x-1 hover:underline text-[#667085]'>
         <MdOutlineLocationOn />
        <p>Select Location</p>
      </div>
      <div className='relative flex items-center'>
        <span className='absolute left-2 bg-yellow-300 rounded-full p-2 hover:bg-[#e7c2d4]'>
        <CiSearch />
        </span>
        <input
          type="text"
          className='pl-14 py-2 w-64 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 tracking-wide'
          placeholder='Find your doctor'
        />
      </div>
      <p className='hover:underline'>About</p>
      <p className='hover:underline'>Help</p>
      <div className='space-x-4 flex bg-white rounded-full border-2 border-white shadow-sm'>
        <p className='px-4 py-2 rounded-3xl transition duration-300 hover:bg-blue-500 hover:text-white'>
          Sign Up
        </p>
        <p className='px-4 py-2 rounded-3xl transition duration-300 hover:bg-blue-500 hover:text-white'>Login</p>
      </div>

    </div>
    </div>
  )
}

export default Navbar