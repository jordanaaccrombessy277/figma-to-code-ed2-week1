import React from 'react'

function OurCollections() {
  return (
    <section className='p-6 md:px-16 h-auto'>
       <h2 className='text-[#0E1218] font-[Bold] text-3xl pb-8'>Our Collections</h2>

       <div className="flex flex-wrap items-center space-y-2 md:space-y-0 justify-between">
           <ul className="flex space-x-2">
                <li className="px-6 py-2 text-white bg-[#0E1218] rounded-xl text-[10px] md:text-[16px] flex items-center"><a href="/" className="font-[Semibold]">All categories</a></li>
                <li className="px-6 py-2 bg-[#E8E9EA] text-[#0E1218] rounded-xl text-[10px] md:text-[16px] flex items-center"><a href="/" className="font-[Semibold]">Art</a></li>
                <li className="px-6 py-2 bg-[#E8E9EA] text-[#0E1218] rounded-xl text-[10px] md:text-[16px] flex items-center"><a href="/" className="font-[Semibold]">Celebrities</a></li>
                <li className="px-6 py-2 bg-[#E8E9EA] text-[#0E1218] rounded-xl hidden md:block items-center"><a href="/" className="font-[Semibold]">Gaming</a></li>
                <li className="px-6 py-2 bg-[#E8E9EA] text-[#0E1218] rounded-xl hidden md:block items-center"><a href="/" className="font-[Semibold]">Sport</a></li>
           </ul>
           <a href="/" className="text-[#1A202C] underline font-[Semibold] text-[14px] md:text-[16px]">View more</a>
       </div>

       <div className="py-8 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 ">
           <div className="border rounded-2xl p-4">
               <div className="w-full h-[250px]">
                  <img className='w-full h-full rounded-2xl object-cover' src="/grid-1.png" alt="grid" />
               </div>
               <div className="flex justify-between py-4">
                  <p className="text-[#0E1218] text-lg font-[Bold]">CyberPink</p>
                  <p className="text-[#0E1218] text-lg font-[Bold] flex space-x-1"><img className='w-[24px] h-[24px]' src="ethereum-ellipse.png" alt="ethereum-ellipse" /> <span>68</span></p>
               </div>
               <div className="border-2 border-[#0E1218] px-4 py-3 rounded-2xl">
                   <p className="font-[Semibold] text-[#0E1218] text-center">Place a Bid</p>
               </div>
           </div>
           <div className="border rounded-2xl p-4">
               <div className="w-full h-[250px]">
                  <img className='w-full h-full rounded-2xl object-cover' src="/grid-2.png" alt="grid" />
               </div>
               <div className="flex justify-between py-4">
                  <p className="text-[#0E1218] text-lg font-[Bold]">Durolost  Boll - Upper</p>
                  <p className="text-[#0E1218] text-lg font-[Bold] flex space-x-1"><img className='w-[24px] h-[24px]' src="ethereum-ellipse.png" alt="ethereum-ellipse" /> <span>68</span></p>
               </div>
               <div className="border-2 border-[#0E1218] px-4 py-3 rounded-2xl">
                   <p className="font-[Semibold] text-[#0E1218] text-center">Place a Bid</p>
               </div>
           </div>
           <div className="border rounded-2xl p-4">
               <div className="w-full h-[250px]">
                  <img className='w-full h-full rounded-2xl object-cover' src="/grid-3.png" alt="grid" />
               </div>
               <div className="flex justify-between py-4">
                  <p className="text-[#0E1218] text-lg font-[Bold]">Space X Wiper</p>
                  <p className="text-[#0E1218] text-lg font-[Bold] flex space-x-1"><img className='w-[24px] h-[24px]' src="ethereum-ellipse.png" alt="ethereum-ellipse" /> <span>68</span></p>
               </div>
               <div className="border-2 border-[#0E1218] px-4 py-3 rounded-2xl">
                   <p className="font-[Semibold] text-[#0E1218] text-center">Place a Bid</p>
               </div>
           </div>
           <div className="border rounded-2xl p-4">
               <div className="w-full h-[250px]">
                  <img className='w-full h-full rounded-2xl object-cover' src="/grid-4.png" alt="grid" />
               </div>
               <div className="flex justify-between py-4">
                  <p className="text-[#0E1218] text-lg font-[Bold]">Snoop Dogg</p>
                  <p className="text-[#0E1218] text-lg font-[Bold] flex space-x-1"><img className='w-[24px] h-[24px]' src="ethereum-ellipse.png" alt="ethereum-ellipse" /> <span>68</span></p>
               </div>
               <div className="border-2 border-[#0E1218] px-4 py-3 rounded-2xl">
                   <p className="font-[Semibold] text-[#0E1218] text-center">Place a Bid</p>
               </div>
           </div>
       </div>
    </section>
  )
}

export default OurCollections
