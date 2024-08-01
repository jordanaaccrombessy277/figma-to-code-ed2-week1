import React from 'react'

function BuildYourNftProfile() {
  return (
    <div className='p-6 md:px-16 md:py-10'>
        <div className="w-full md:h-[400px] h-[350px] relative">
             <img src="/buildyournftprofile.png" className='w-full h-full rounded-2xl object-cover' alt="image, build your profile" />
             <div className="absolute w-full h-full top-0 bg-[#00000070] rounded-2xl flex flex-col space-y-10 justify-center items-center">
                <p className="text-white text-center font-[Medium] lg:text-[64px] md:text-[46px] text-[28px] lg:leading-10 md:leading-[40px] px-4">Build your NFT profile</p>
                <p className="font-[Semibold] text-center lg:text-xl md:text-lg text-xs text-white">Join almost 10k NFT profiles on Digit !</p>
                <a href="/" className="bg-white font-[Semibold] rounded-[42px] px-8 py-3 text-[#0E1218] inline-block">Sign up now</a>
             </div>
        </div>
    </div>
  )
}

export default BuildYourNftProfile
