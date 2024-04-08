import React, { useEffect, useState } from 'react';
import {useNavigate } from 'react-router-dom';
import axios from '../utils/axios';
import Loading from './Loading';
import { MdArrowCircleLeft } from "react-icons/md";
import Topnav from './templates/Topnav';
import Dropdown from './templates/Dropdown';
import InfiniteScroll from 'react-infinite-scroll-component';
import Cards from './templates/Cards';

const Series = () => {
    const navigate = useNavigate();
    const[category, setCategory] = useState("popular");
    const[series, setSeries] = useState([]);
    const[page, setPage] = useState(1);
    const[hasMore , sethasMore] = useState(true);
    document.title = "Noflix Movies";

    const GetSeries = async () => {
        try {
          const {data} = await axios.get(`/tv/${category}?page=${page}`);
        console.log(data);

          if(data.results.length > 0 ){
            setSeries((prevState)=> [...prevState, ...data.results]);
          setPage(page + 1);
          }else{
            sethasMore(false);
          }
          
        } catch (error) {
          console.log("Error", error);
        }
      };
      const refereshHandler = () => {
        if(series.length === 0 ){
          GetSeries()

        }else {
          setPage(1);
          setSeries([]);
          GetSeries();
        }
      }

      useEffect(() =>{
        refereshHandler();
      },[category])


      return series.length>0 ? (
        <div className='h-screen w-full'>
            <div className=' px-[5%] w-full h-[10vh] flex items-center justify-between'>
                <MdArrowCircleLeft onClick={()=> navigate(-1)} className='hover:text-[#FF3F47] text-3xl fill-[#FF3F47] mr-2'/>
                <h1 className='w-[20%] text-2xl text-white font-semibold '>series<small className='ml-2 text-xm text-zinc-600 '>({category})</small></h1>
                <Topnav />
                <Dropdown title="filter" options={['airing_today','popular','top_rated','on_the_air']} func={(e) => setCategory(e.target.value)}/>
            </div>
            <InfiniteScroll
            dataLength={series.length}
            loader={<h4>Loading...</h4>}
            next={GetSeries}
            hasMore={hasMore}
      
            endMessage={
            <p style={{ textAlign: 'center' }}>
             <b>Yay! You have seen it all</b>
            </p>
            }
            
            >
            <Cards  data= {series} title="tv"/>
              
            </InfiniteScroll>
    
            
    
    
            
        </div>
      ) :(
        <Loading />
      )
    }
export default Series