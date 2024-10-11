import React from 'react'
import {useNavigate} from "react-router-dom"


const AlbumItem = ({image , name , desc , id}) => {

const navigate = useNavigate()

  return (
    <div onClick={() => navigate(`/album/${id}`)} className='min-w-[180px] p-2 px-3 flex flex-col items-center text-center justify-center rounded cursor-pointer hover:bg-[#ffffff26] '>
        <img className='rounded h-[130px] w-[150px] hover:scale-125 hover:mb-5 ' src={image} alt="" />
        <p className='font-bold mt-2 mb-1 w-[150px]'>{name}</p>
        <p className='text-slate-200 text-sm '>{desc}</p>

    </div>
  )
}

export default AlbumItem