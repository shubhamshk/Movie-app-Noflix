import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './reducers/movieSlice';
import seriesReducer from './reducers/seriesSlice';
import celebrityReducer from './reducers/celebritySlice';


export const store = configureStore({
  reducer: {
    movie :movieReducer,
    series :seriesReducer,
    celebrity :celebrityReducer,
  },
})