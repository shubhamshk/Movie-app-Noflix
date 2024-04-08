import React, { useEffect } from 'react';
import { MdAddHome } from "react-icons/md";
import { PiFilmReelFill } from "react-icons/pi";
import { RiTvFill } from "react-icons/ri";
import { SiGooglechat } from "react-icons/si";
import { Link } from 'react-router-dom';
import { FaFire } from "react-icons/fa";
import { IoMdTrophy } from "react-icons/io";



const Sidenav = () => {

  return (
    <div className='h-full w-[13%] bg-[#1D1F29] border-r-2 border-red-200 '>
      <div className='w-[100%] p-3'>
        <div className='flex items-center mt-1'>
      <h1 className='text-red-600 font-bold mr-1 text-[1.7vw]'>MOVIES</h1><h1 className='text-blue-600 font-bold text-[1.7vw]'>NEST</h1>
      </div>
      </div>
      <hr className='w-full mt-3' />
      
      <div className=' hover:bg-[#AB2BAF] hover:scale-x-110	 flex items-center p-5 rounded-lg'>
      <FaFire className='fill-white text-2xl'/>

      <Link to="/Trending" className='ml-2 text-lg text-white font-bold '>Trending</Link>
      </div>
      <div className=' hover:bg-[#AB2BAF] hover:scale-x-110	 flex items-center p-5 rounded-lg'>
      <IoMdTrophy className='fill-white text-2xl'/>
      <Link to="/Popular" className='ml-2 text-lg text-white font-bold '>Popular</Link>
      </div>
      <div className='hover:bg-[#AB2BAF] hover:scale-x-110 rounded-lg flex items-center p-5'>
      <PiFilmReelFill className='fill-white text-2xl' />
     <Link to= "/movie" className='hover:bg-[#AB2BAF] ml-2 text-lg text-white font-bold'>Movies</Link>

        
      </div>
      <div className='hover:bg-[#AB2BAF] hover:scale-x-110 rounded-lg flex items-center p-5'>
      <RiTvFill className='fill-white text-2xl' />

      <Link to= "/tv" className='ml-2 text-lg text-white font-bold'>Series</Link>
      </div>
      <div className='hover:bg-[#AB2BAF] hover:scale-x-110 rounded-lg flex items-center p-5'>
      <RiTvFill className='fill-white text-2xl' />

      <Link to= "/Celebrity" className='ml-2 text-lg text-white font-bold'>Celebrity</Link>
      </div>
      <div className='hover:bg-[#AB2BAF] hover:scale-x-110 rounded-lg flex items-center p-5'>
      <SiGooglechat className='fill-white text-2xl' />

      <Link to= "/Community" className='ml-2 text-lg text-white font-bold'>Community</Link>
      </div>
      <hr className='ml-4 w-[80%] mt-3' />
    </div>
  )
}

export default Sidenav



