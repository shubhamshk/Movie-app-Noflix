import React, { useEffect,useState } from 'react';
import 'remixicon/fonts/remixicon.css';
import Sidenav from'./templates/Sidenav';
import Topnav from './templates/Topnav';
import axios  from '../../src/utils/axios';
import Headers from './templates/Headers';
import TopCards from './templates/TopCards';
import Dropdown from './templates/Dropdown';
import Loading from './Loading';

const Home = () => {
  const[wallpaper,setwallpaper] = useState(null);
  const[trending,settrending] = useState(null);
  const[category, setCategory] = useState("all");

  const GetWallpaper = async () => {
    try {
      const {data} = await axios.get(`/trending/all/day`);
      let randomdata = data.results[(Math.random()*data.results.length).toFixed()];
      setwallpaper(randomdata);
    } catch (error) {
      console.log("Error", error);
    }
  };

  const GetTrending = async () => {
    try {
      const {data} = await axios.get(`/trending/${category}/day`);
      settrending(data.results);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(()=>{
    GetTrending();
    !wallpaper && GetWallpaper();
    

  },[category])
  return wallpaper && trending ? (
    < >
    <Sidenav />
      <div className='h-full w-[87%] overflow-y-auto overflow-x-hidden' style={{ background: 'radial-gradient(circle at center, #20222B, #0C0D10)' }}>
        <Topnav  />
        <Headers data = {wallpaper}/>
        <div className='flex justify-between p-3'>
      <h1 className='text-3xl font-bold text-zinc-400 '>Trending</h1>
      <Dropdown title="filter" options={['tv','movie','all']} func={(e) => setCategory(e.target.value)}/>
      </div>
        <TopCards data={trending} func={setCategory} />
      </div>
     
      
      
      
    </>
  ):<Loading />
}

export default Home