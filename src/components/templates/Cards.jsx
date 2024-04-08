import React from 'react';
import { Link } from 'react-router-dom';

function Cards({data, title}) {
  return (
    <div className='flex flex-wrap w-full h-full px-[5%] py-[1%] bg-[#27272A]'>
        {data.map((c,i) => (
        <Link to ={`/${c.media_type || title}/details/${c.id}`} className=' relative w-[25vh] mr-[4%] mb-[1%]' key={i}>
            <img className='shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] h-[40vh] object-cover' src={`https://image.tmdb.org/t/p/original${c.backdrop_path || c.profile_path}`} alt='' />
            <h1 className='text-2xl font-semibold mt-3 text-white  '>
            {c.name || c.title || c.original_name || c.original_title}
            </h1>
            {c.vote_average && (<div className='absolute right-[-12%] bottom-[45%] rounded-full text-md font-semibold text-white bg-yellow-500 w-[7vh] h-[7vh] flex items-center justify-center'>{(c.vote_average*10).toFixed()} <sup>%</sup></div>)}
            </Link>))}
            
    </div>
  )
}

export default Cards