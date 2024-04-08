import React from 'react'
import Dropdown from './Dropdown'
import { Link } from 'react-router-dom'

function TopCards({data, func}) {
  return (
    <div className='w-full h-[40vh] p-3'>
      <div className='w-[100%] flex j-[50vh] overflow-x-auto '>
        {data.map((d,i) => (
        <Link to={`/${d.media_type}/details/${d.id}`} key ={i} className='min-w-[15%] j-full rounded-md bg-zinc-800 mr-5 flex flex-col items-center'>
          <img className='w-full h-[55%] object-cover rounded-md'src ={`https://image.tmdb.org/t/p/original${d.backdrop_path || d.poster_path})`}></img>
           <h1 className="text-white font-bold text-xl">{d.name || d.title || d.original_name || d.original_title}</h1>
       <p className=" text-red-200 text-xl ">{d.overview.slice(0,50)}...<span className=" text-xl text-blue-600">more</span></p>
          </Link>
        
        ))}

      </div>
    </div>
  )
}

export default TopCards