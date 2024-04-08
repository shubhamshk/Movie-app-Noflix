import React from "react";
import {Link}  from "react-router-dom";
import { MdOutlineDateRange } from "react-icons/md";
import { BiCameraMovie } from "react-icons/bi";



function Headers({data}) {
    console.log(data);
    return (
      <div 
        style={{ background: ` url(https://image.tmdb.org/t/p/original${data.backdrop_path || data.profile_path})`,
        backgroundPosition:'top',
        backgroundSize:'cover',
     }}
        className='w-full h-[65vh] mt-0 flex flex-col justify-end p-10 flex-wrap overflow-x-hidden overflow-y-auto'>
       <h1 className="text-white font-bold text-5xl">{data.name || data.title || data.original_name || data.original_title}</h1>
       <p className=" text-white text-xl w-[40%]">{data.overview.slice(0,200)}...<Link className=" text-xl text-blue-600">more</Link></p>
       <p className="flex text-xl text-white gap-3 p-2">
        <i className="text-yellow-400"><MdOutlineDateRange /></i>{" "}{data.first_air_date || data.release_date}
        <i className="text-yellow-400"><BiCameraMovie /></i>{'   '}{data.media_type}</p>
        <Link className="mt-5 w-[12%] bg-[#6556CD] p-3 rounded-md text-white">{''}Watch Trailer
        </Link>
      </div>
    );
  }
  
  export default Headers;
  