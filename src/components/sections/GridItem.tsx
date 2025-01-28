import React from 'react'
import { gridItems } from '../../../data'
import { GoArrowRight } from 'react-icons/go'
import Image from 'next/image'

const GridItem = () => {
  return (
    <div className=' grid grid-cols-2 gap-2 text text-[#252b61] relative lg:grid-cols-4 '>
        {gridItems.map((item)=>(
            <div key={item.id} className={`bg-[${item.bg}] rounded-2xl p-14`} >
                <div className=' block gap-5 '>
                    <h1 className=' font-semibold text-3xl '>{item.title}</h1>
                    <p>{item.description}</p>
                </div>
               <div>
               <div className=' bg-[#252b61] w-40 flex flex-row items-center z-30 rounded-full p-5 text-white   justify-start absolute  '>
                   <p className=''>BOOK NOW</p>
                   <GoArrowRight className=' text-2xl'/>
                </div>
                <div className='  -z-10 absolute bottom-1'>
                    <Image src={item.img} alt={item.alt} width={200}height={150}/>
                </div>
               </div>
                
            </div>
        ))}
    </div>
  )
}

export default GridItem