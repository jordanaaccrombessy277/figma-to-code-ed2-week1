import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
   
    <footer className='p-6 md:px-16 md:py-4 '>
        <div className="py-4 border-b">
            <img src="/logo.png" alt="logo" className='w-[36px] h-[36px]'/>
        </div>
        <div className="flex flex-col lg:flex-row py-8 gap-y-4 lg:gap-y-0 lg:justify-between">
            <p className="text-xl md:text-2xl font-[Semibold] text-[#181D28]">Create Explore & Collect Digital  NFTs</p>
            <ul className="text-[#000000] text-[12px] md:text-[16px] flex pl-8 md:pl-0 md:justify-normal flex-row gap-5">
                <li className=""><Link to="/" className="font-[Medium]">Privacy</Link></li>
                <li className=""><Link to="/" className="font-[Medium]">Terms and Conditions</Link></li>
                <li className=""><Link to="/" className="font-[Medium]">About us</Link></li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer
