import React, { useEffect, useState } from 'react'
import {useNavigate } from 'react-router-dom';
import { MdArrowCircleLeft } from "react-icons/md";
import Topnav from './templates/Topnav';
import Dropdown from './templates/Dropdown';
import axios from '../utils/axios';
import Cards from './templates/Cards';
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';


function Trending() {
    const navigate = useNavigate();
    const[category, setCategory] = useState("all");
    const[duration, setDuration] = useState("day");
    const[trending, setTrending] = useState([]);
    const[page, setPage] = useState(1);
    const[hasMore , sethasMore] = useState(true);
    document.title ="Noflix Trending"

    const GetTrending = async () => {
        try {
          const {data} = await axios.get(`/trending/${category}/${duration}?page=${page}`);
          console.log(data);
        

          if(data.results.length > 0 ){
            setTrending((prevState)=> [...prevState, ...data.results]);
          setPage(page + 1);
          }else{
            sethasMore(false);
          }
          
        } catch (error) {
          console.log("Error", error);
        }
      };
      
      const refereshHandler = () => {
        if(trending.length === 0 ){
          GetTrending()

        }else {
          setPage(1);
          setTrending([]);
          GetTrending();
        }
      }

      useEffect(() =>{
        refereshHandler();
      },[category,duration])

  return trending.length>0 ? (
    <div className='h-screen w-full'>
        <div className=' px-[5%] w-full h-[10vh] flex items-center justify-between'>
            <MdArrowCircleLeft onClick={()=> navigate(-1)} className='hover:text-[#FF3F47] text-3xl fill-[#FF3F47] mr-2'/>
            <h1 className='w-[20%] text-2xl text-white font-semibold '>Trending<small className='ml-2 text-xm text-zinc-600 '>({category})</small></h1>
            <Topnav />
            <Dropdown title="filter" options={['all','tv','movie']} func={(e) => setCategory(e.target.value)}/>
            <div className='w-[2%]'></div>
            <Dropdown title="Time" options={['week','day']} func={(e) => setDuration(e.target.value)}/>
        </div>
        <InfiniteScroll
        dataLength={trending.length}
        loader={<h4>Loading...</h4>}
        next={GetTrending}
        hasMore={hasMore}
  
        endMessage={
        <p style={{ textAlign: 'center' }}>
         <b>Yay! You have seen it all</b>
        </p>
        }
        
        >
        <Cards  data= {trending} title={category}/>
          
        </InfiniteScroll>

        


        
    </div>
  ) :(
    <Loading />
  )
}

export default Trending