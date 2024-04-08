import React from 'react'
import { Route , Routes} from 'react-router-dom';
import Home from './components/Home';
import Loading from './components/Loading';
import Trending from './components/Trending';
import Popular from './components/Popular';
import Movies from './components/Movies';
import Series from './components/Series';
import Celebrity from './components/Celebrity';
import MovieDetails from './components/MovieDetails';
import SeriesDetails from './components/SeriesDetails';
import CelebrityDetails from './components/CelebrityDetails';





const App = () => {

  return (
    <div className='w-screen h-screen bg-zinc-800 flex'>
      <Routes>
        <Route path='/' element ={<Home />} />
        <Route path='/l' element ={<Loading />} />
        <Route path='/Trending' element ={<Trending />} />
        <Route path='/Popular' element ={<Popular />} />
        <Route path='/movie' element ={<Movies />} >
        
        </Route>
        <Route path='/movie/details/:id' element={<MovieDetails />} />
        <Route path='/tv' element ={<Series />} >
        
        </Route>
        <Route path = "/tv/details/:id" element ={<SeriesDetails/>}
          />
        <Route path='/Celebrity' element ={<Celebrity />} >
        
        </Route>
        <Route path = "/Celebrity/details/:id" element ={<CelebrityDetails/>}
          />
        

      </Routes>



    </div>
  )
}

export default App