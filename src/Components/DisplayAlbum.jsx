import React , {useContext} from 'react'
import NavBar from './NavBar'
import { useParams } from 'react-router-dom'
import { albumsData } from '../assets/assests'
import { assets } from '../assets/assests'
import { FaRegClock } from "react-icons/fa";
import {atif_Songs , kk_Songs , rahat_Songs , honey_Songs ,fav_Songs} from "../assets/assests"
import { PlayerContext } from '../Context/PlayerContext'


const DisplayAlbum = () => {
  const { id } = useParams();
  const albumdata = albumsData[id];

  const { selectTrack } = useContext(PlayerContext);
  
  const handleTrackSelect = async(song) => {
      await selectTrack(song); // Select the song when clicked
  };

  const songList = albumdata.id === 0 ? atif_Songs :
                  albumdata.id === 1 ? kk_Songs :
                  albumdata.id === 2 ? honey_Songs :
                  albumdata.id === 3 ? rahat_Songs :
                  fav_Songs;

  return (
      <>
          <NavBar />
          <div className='mt-10 flex flex-col md:flex-row md:items-end'>
              <img className='rounded w-48 h-48' src={albumdata.Image} alt="" />
              <div className="p-5 flex flex-col">
                  <p className='font-semibold'>PlayList</p>
                  <h2 className='text-5xl w-[100%] font-bold mb-2 md:text-6xl'>{albumdata.name}</h2>
                  <h4>{albumdata.desc}</h4>
                  <p className='mt-1'>
                      <img className='inline-block mr-2 bg-white rounded-full p-1 w-7' src={assets.Logo} alt="" />
                      <b>Music</b> • 5,41,317 likes <b>10 Songs</b> about 40min
                  </p>
              </div>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
              <p><span className='mr-4'>#</span> Title</p>
              <p className='pl-7'> Album</p>
              <p className='hidden sm:block'> Date Added</p>
              <FaRegClock className='m-auto w-4' />
          </div>
          <hr />
          <div>
              {
                  songList.map((song, index) => (
                      <div
                          key={song.id}
                          className='gap-4 grid grid-cols-3 sm:grid-cols-4 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer'
                          onClick={() => handleTrackSelect(song)} // Add click handler
                      >
                          <div className='flex items-center text-white'>
                              <b className='mr-4 text-[#a7a7a7]'>{index + 1}</b>
                              <img className='sm:inline w-10 mr-5' src={song.image} alt="" />
                              <span className='inline'>{song.name}</span>
                          </div>
                          <p className='pl-5 text-[15px]'>{albumdata.name}</p>
                          <p className='text-[15px] hidden sm:block'>5 days ago</p>
                          <p className='text-[15px] text-center'>{song.duration}</p>
                      </div>
                  ))
              }
          </div>
      </>
  );
}

export default DisplayAlbum