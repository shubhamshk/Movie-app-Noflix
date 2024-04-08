import React, { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../utils/axios';
import noimage from '/noimage.jpg'

function Topnav() {
  const [show, setShow] = useState("");
  const [searches , setsearches] = useState([]);

  const GetSearches = async () => {
    try {
      const {data} = await axios.get(`/search/multi?query=${show}`);
      setsearches(data.results);
      // console.log(data.results);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(()=>{
    GetSearches()
  },[show]);
  
  return (
    <>
      <div className='w-full h-[10vh] flex items-center justify-between overflow-hidden p-5 mt-2 mb-2'>
        <div className="flex-grow "> 
          <i className='text-zinc-400 text-2xl ri-search-line'></i>
          <input onChange ={(e) =>setShow(e.target.value)} 
          value={show} className='w-[20vw] bg-transparent border border-red-500 mx-10 p-3 text-white font-semibold rounded-[8vh]' 
          type="text" placeholder=' Search Anything' />
          {show.length >0 && (<i onClick={()=>setShow('')}
           className='text-zinc-400 text-3xl ri-close-fill'></i>)}
        
          <div className='z-[100] absolute w-[50vw] ml-[6vw] max-h-[50vh] bg-[#232345] rounded-[3vh] overflow-y-auto overflow-x-hidden'>
          {searches.map((s,i) => (<Link to ={`/${s.media_type}/details/${s.id}`} key={i} className='hover:bg-[#AB2BAF] hover:scale-x-110 bg-transparent w-[100%] p-5 flex justify-start items-center border-yellow-300 border-b-2 text-white font-bold text-xl'>
            <img className='w-[20vh] h-[10vh] object-cover mr-5 rounded-md'
            src={s.backdrop_path || s.profile_path ? `https://image.tmdb.org/t/p/original${s.backdrop_path || s.profile_path}` :noimage } alt='' />
            <span>{s.name || s.title || s.original_name || s.original_title}</span>
            </Link>))}
          
          </div>
        </div>
        <div className="rounded-full bg-gray-200 h-12 w-12 flex items-center bg-blue-600 ">
            <div className='object-cover ml-2'><img className="h-[6vh] w-auto" src='./public/user1.png' alt='' /></div>
        </div><Link to="/users" className='ml-2 text-lg text-white font-bold '>UserId</Link>
      </div>
    </>
  )
}

export default Topnav;
