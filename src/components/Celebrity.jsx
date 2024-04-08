import React, { useEffect, useState } from 'react';
import {useNavigate } from 'react-router-dom';
import axios from '../utils/axios';
import Loading from './Loading';
import { MdArrowCircleLeft } from "react-icons/md";
import Topnav from './templates/Topnav';
import Dropdown from './templates/Dropdown';
import InfiniteScroll from 'react-infinite-scroll-component';
import Cards from './templates/Cards';

const Celebrity = () => {

    const navigate = useNavigate();
    const[category, setCategory] = useState("popular");
    const[celebrity, setCelebrity] = useState([]);
    const[page, setPage] = useState(1);
    const[hasMore , sethasMore] = useState(true);
    document.title = "Noflix Celebrity";

    const GetCelebrity = async () => {
        try {
          const {data} = await axios.get(`/person/${category}?page=${page}`);
        console.log(data);

          if(data.results.length > 0 ){
            setCelebrity((prevState)=> [...prevState, ...data.results]);
          setPage(page + 1);
          }else{
            sethasMore(false);
          }
          
        } catch (error) {
          console.log("Error", error);
        }
      };
      const refereshHandler = () => {
        if(celebrity.length === 0 ){
          GetCelebrity()

        }else {
          setPage(1);
          setCelebrity([]);
          GetCelebrity();
        }
      }

      useEffect(() =>{
        refereshHandler();
      },[category])


  return celebrity.length>0 ? (
    <div className='h-screen w-full'>
        <div className=' px-[5%] w-full h-[10vh] flex items-center justify-between'>
            <MdArrowCircleLeft onClick={()=> navigate(-1)} className='hover:text-[#FF3F47] text-3xl fill-[#FF3F47] mr-2'/>
            <h1 className='w-[20%] text-2xl text-white font-semibold '>celebrity</h1>
            <Topnav />
        </div>
        <InfiniteScroll
        dataLength={celebrity.length}
        loader={<h4>Loading...</h4>}
        next={GetCelebrity}
        hasMore={hasMore}
  
        endMessage={
        <p style={{ textAlign: 'center' }}>
         <b>Yay! You have seen it all</b>
        </p>
        }
        
        >
        <Cards  data= {celebrity} title="celebrity"/>
          
        </InfiniteScroll>

        


        
    </div>
  ) :(
    <Loading />
  )
}

export default Celebrity