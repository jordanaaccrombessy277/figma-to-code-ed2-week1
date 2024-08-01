import React from 'react'
import { HiArrowLongRight } from "react-icons/hi2";

function Heros() {
  return (
    <div className='px-6 py-16 md:px-16 flex flex-wrap h-auto lg:h-[695px]'>
        <div className="md:w-full md:h-auto lg:w-[50%]">
            <h1 className='pb-4 font-[Regular] text-[40px] md:text-[100px] lg:text-[120px] leading-tight md:leading-[80px] lg:leading-none'>See the NFT new world</h1>
            <div className="py-4">
                <p className="py-4 text-[rgb(72,77,86)] font-[Semibold] w-full md:w-[442px] lg:w-[412px]">Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, di</p>    
                <p className="py-4 text-[#181D28] font-[Semibold] space-x-5 flex items-center">
                    <span>Discover Now</span>
                    <a href="/" className="w-[48px] h-[48px] flex justify-center items-center border border-[#181D28] rounded-full"><HiArrowLongRight /></a>
                </p>      
            </div>
        </div>
       <div className="w-full lg:w-[50%] lg:h-full md:h-[636px] h-auto flex flex-col md:flex-row gap-6 relative ">
           <img src="arrondis.png" className='absolute lg:top-2 lg:left-[200px] md:top-0 md:left-[200px] top-0 left-[50px]' alt="arrondis" />
           <div className="md:w-1/2 lg:w-1/2 flex justify-center">
                <img className='lg:w-[335px] md:w-[350px] w-[240px] lg:h-[437px] md:h-[507px] h-[340px] rounded-full md:relative md:top-32 object-cover' src="/machina.png" alt="" />
            </div>
            <div className="md:w-1/2 lg:w-1/2 flex justify-center">
                <img className='lg:w-[335px] md:w-[350px] w-[240px] lg:h-[437px] md:h-[507px] h-[340px] rounded-full object-cover' src="/monkey.png" alt="" />
            </div>
       </div>
    </div>
  )
}

export default Heros
