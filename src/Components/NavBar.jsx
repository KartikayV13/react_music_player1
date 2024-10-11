import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FaArrowRight , FaArrowLeft } from "react-icons/fa";


const NavBar = () => {

  const navigate = useNavigate()
  
  return (
    <>
    <div className="w-full p-3 flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
        <FaArrowLeft onClick={() => navigate(-1)} className="bg-slate-500 border-2 cursor-pointer rounded-full p-1 text-2xl"/>
            <FaArrowRight onClick={() => navigate(1)} className="bg-slate-500 cursor-pointer border-2 rounded-full p-1 text-2xl"/> 
        </div>
        <div className="flex items-center gap-4">
          <p className='bg-white text-black text-[15px] px-4 py-1 cursor-pointer rounded-2xl hidden md:block'>Explore Premium</p>
          <p className="bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer ">Try To Play</p>
          <p className='bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center'>KK</p>
        </div>
    </div>
        <div className="flex items-center gap-2 mt-4">
          <p className='bg-white text-black px-4 py-1 rounded-2xl '>All</p>
          <p className='bg-black px-4 py-1 rounded-2xl border-2 border-black hover:border-white cursor-pointer '>Music</p>
          <p className='bg-black px-4 py-1 rounded-2xl border-2 border-black hover:border-white cursor-pointer'>Podcast</p>
        </div>
    </>
  )
}

export default NavBar