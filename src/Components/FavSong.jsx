import { useContext } from 'react'
import React  from 'react'
import { PlayerContext } from '../Context/PlayerContext'


const FavSong = ({name , image , id}) => {

const {playWithId} = useContext(PlayerContext)

  return (
    <div onClick={() => playWithId(id)}  className='min-w[180px] shrink-0 p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
        <img src={image} alt="" className='rounded h-[150px] w-[150px]' />
        <p className='font-bold mt-2 mb-1'>{name}</p>
    </div>
  )
}

export default FavSong