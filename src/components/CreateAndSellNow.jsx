import React from 'react'

function CreateAndSellNow() {
  return (
    <div className='p-6 md:px-16 h-auto'>
        <h2 className='text-[#0E1218] font-[Bold] text-3xl pb-8'>Create and Sell Now</h2>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
            <div className="border bg-[#E8E9EA] p-6 rounded-2xl">
               <img src="doc.png" alt="icone" className='w-[50px] h-[50px]' />
               <p className="text-xl font-[Bold] py-2">Set up your wallet</p>
               <p className="text-[#484D56]">
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
               </p>
            </div>
            <div className="border bg-[#E8E9EA] p-6 rounded-2xl">
               <img src="nuage.png" alt="icone" className='w-[50px] h-[50px]' />
               <p className="text-xl font-[Bold] py-2">Add your NFT’s</p>
               <p className="text-[#484D56]">
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
               </p>
            </div>
            <div className="border bg-[#E8E9EA] p-6 rounded-2xl">
               <img src="price.png" alt="icone" className='w-[50px] h-[50px]' />
               <p className="text-xl font-[Bold] py-2">Promote your NFT’s</p>
               <p className="text-[#484D56]">
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
               </p>
            </div>
            <div className="border bg-[#E8E9EA] p-6 rounded-2xl">
               <img src="priceb.png" alt="icone" className='w-[50px] h-[50px]' />
               <p className="text-xl font-[Bold] py-2">Sell your NFT’s</p>
               <p className="text-[#484D56]">
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
               </p>
            </div>
        </div>
    </div>
  )
}

export default CreateAndSellNow
