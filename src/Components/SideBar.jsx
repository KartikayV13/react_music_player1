import React, { useState } from "react";
import { assets } from "../assets/assests";
import { FaHome, FaSearch, FaArrowRight, FaPlus } from "react-icons/fa";
import { LuLibrary } from "react-icons/lu";

const SideBar = () => {


  return (
    <div className="w-[25%]  p-2 flex-col gap-2 text-white hidden lg:flex">
      <div className="bg-[#272626] h-[15%] rounded flex flex-col justify-around">
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <FaHome className="text-2xl" />
          <p className="font-bold">Home</p>
        </div>
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <FaSearch className="text-2xl" />
          <p className="font-bold">Search</p>
        </div>
      </div>
      <div className="bg-[#272626] h-[85%] rounded">
        <div className="p-4 flex items-centre justify-between">
          <div className="flex items-center gap-3 cursor-pointer">
            <LuLibrary className="text-2xl" />
            <p className="font-semibold"> Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <FaArrowRight />
            <FaPlus />
          </div>
        </div>
        <div className="p-4 bg-[#4b4242] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
          <h1>Create Your First Play List</h1>
          <p className="font-light">It's easy We Will help you</p>
          <button className="px-4 py-1 shadow shadow-lime-200 bg-white text-[15px] text-black rounded-full mt-4" >
            Create PlayList
          </button>
         
          
        </div>
        <div className="p-4 bg-[#4b4242] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
          <h1>Lets Find Some Podcast To Follow</h1>
          <p className="font-light">
            We Will Keep You Update On New Episode
          </p>
          <button className="px-4 py-1 shadow shadow-lime-200 bg-white text-[15px] text-black rounded-full mt-4">
            Brows PodCasts
          </button>
        </div>

      <button className="px-4 w-20 py-1 shadow shadow-lime-200 bg-white text-[15px] text-black rounded-full mt-4">
           By KK
          </button>
      </div>
    </div>
  );
};

export default SideBar;
