import React, { useContext } from 'react'
import {fav_Songs } from "../assets/assests"
import { FaShuffle , FaPlay  } from "react-icons/fa6";
import { MdSkipPrevious, MdSkipNext, MdLoop   } from "react-icons/md";
import { LuPlaySquare, LuMic2   } from "react-icons/lu";
import { PiQueue } from "react-icons/pi";
import { GiSpeaker } from "react-icons/gi";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { CgMiniPlayer } from "react-icons/cg";
import { AiOutlineExpandAlt } from "react-icons/ai";
import { FaPause } from 'react-icons/fa';
import { PlayerContext } from '../Context/PlayerContext';

const Player = () => {

  const {track , seekBar , seekBg, playStatus , play , pause , time , playNext, playPrevious, shuffleSongs} = useContext(PlayerContext)

  if (!track) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-[10%] bg-black border-t-2 border-whitevcc flex justify-between text-white px-5">
        <div className="hidden lg:flex items-center gap-4">
            <img src={track.image} alt="" className='w-12' />
            <div>
                <p>{track.name}</p>
                <p>{track.desc? track.desc.slice(0 , 100) : "Enjoy the song"}</p>  

            </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-1 m-auto">
          <div className="flex gap-4 ">
            <FaShuffle onClick={shuffleSongs} className="w-4 cursor-pointer"/>

              <MdSkipPrevious onClick={playPrevious} className="w-4 cursor-pointer"/>
            {playStatus ? 
          <FaPause onClick={pause} className="w-4 cursor-pointer"/> : 
            <FaPlay onClick={play}   className="w-4 cursor-pointer"/>
         } 
            <MdSkipNext onClick={playNext} className="w-4 cursor-pointer"/>
            <MdLoop className="w-4 cursor-pointer"/> 
          </div>
          <div className="flex item-centre gap-5 ">
            <p>{time.currentTime.minute} : {time.currentTime.second}</p>
            <div  ref={seekBg} className="w-[60vw] h-1 mt-2 max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
              <hr ref={seekBar} className='h-1 border-none w-0 bg-green-800 rounded-full' />
            </div>
            <p>{time.totalTime.minute} : {time.totalTime.second}</p>
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-3 opacity-75 cursor-pointer">
        <LuPlaySquare className='w-4 font-semibold'/>
        <LuMic2 className='w-4 font-semibold'/>
        <PiQueue className='w-4 font-semibold'/>
        <GiSpeaker className='w-4 font-semibold'/>
        <CgMiniPlayer className='w-4 font-semibold'/>
        <AiOutlineExpandAlt className='w-4 font-semibold'/>
        </div>
    </div>
  )
}

export default Player