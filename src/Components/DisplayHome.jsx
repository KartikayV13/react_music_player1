import React from 'react'
import NavBar from './NavBar'
import { albumsData } from '../assets/assests'
import AlbumItem from './AlbumItem'
import {fav_Songs} from "../assets/assests"
import FavSong from './FavSong'

const DisplayHome = ( ) => {

  return (
   <>
   <NavBar/>
   <div className="mb-4">
    <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
    <div className="flex overflow-auto">{albumsData.map((item , index) => (
<AlbumItem key={index} name={item.name} image={item.Image} desc={item.desc} id={item.id}/>
))}</div>

   </div>
   <div className="mb-4">
    <h1 className='my-5 font-bold text-2xl'>Favourite List</h1>
    <div className="flex overflow-auto ">
      {fav_Songs.map((item , index) => (
        <FavSong  key={index} name={item.name}  id={item.id} image={item.image} />
      ))}
    </div>

   </div>
   </>
  )
}

export default DisplayHome