import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { TiTimesOutline, TiEqualsOutline } from "react-icons/ti";



function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
   
    <header className='p-6 md:px-16 md:py-4 flex flex-row justify-between border-b h-auto lg:items-center relative'>
        <img src="/logo.png" alt="logo" className='w-[36px] h-[36px]'/>
        <ul className={` hidden lg:flex flex-row gap-7 `}>
            <li className=""><Link to="/" className="font-[Semibold] text-[#12171F]">Home</Link></li>
            <li className=""><Link to="/" className="font-[Semibold] text-[#12171F]">Top Sales</Link></li>
            <li className=""><Link to="/" className="font-[Semibold] text-[#12171F]">Collections</Link></li>
            <li className=""><Link to="/" className="font-[Semibold] text-[#12171F]">Our blog</Link></li>
            <li className=""><Link to="/" className="font-[Semibold] text-[#12171F]">About us</Link></li>
        </ul>
    
        <ul className={`text-[#12171F] hidden lg:flex flex-row gap-5`}>
            <li className="border-r-2 border-[#0E1218]"><Link to="/" className="font-[Semibold] pr-4">Sign Up</Link></li>
            <li className=""><Link to="/" className="font-[Semibold] text-white bg-[#0E1218] px-5 py-2 rounded-[42px]">Connect Wallet</Link></li>
        </ul>  

        <button 
          className={`bg-[#E8E9EA] px-1 rounded-md lg:hidden z-20`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
         { isMenuOpen ? <TiTimesOutline size="25" /> : <TiEqualsOutline size="25" />}
        
        </button>

        <nav className={`fixed py-32 px-8 z-10 top-0 bg-white shadow-md w-full h-full lg:hidden duration-1000 ${isMenuOpen ? 'translate-x-0' : 'translate-x-[100%]'}`}>

          <ul className="text-[#12171F] flex flex-col gap-7">
              <li className=""><Link to="/" className="font-[Semibold]">Home</Link></li>
              <li className=""><Link to="/" className="font-[Semibold]">Top Sales</Link></li>
              <li className=""><Link to="/" className="font-[Semibold]">Collections</Link></li>
              <li className=""><Link to="/" className="font-[Semibold]">Our blog</Link></li>
              <li className=""><Link to="/" className="font-[Semibold]">About us</Link></li>
          </ul>
      
          <ul className="text-[#12171F] flex flex-row py-8 gap-5">
              <li className="border-r-2 border-[#0E1218]"><Link to="/" className="font-[Semibold] pr-4">Sign Up</Link></li>
              <li className=""><Link to="/" className="font-[Semibold] text-white bg-[#0E1218] px-5 py-2 rounded-[42px]">Connect Wallet</Link></li>
          </ul> 

        </nav>
    </header>
   
  )
}

export default Header
