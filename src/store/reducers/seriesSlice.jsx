import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  info: null,
};

export const seriesSlice = createSlice({
  name: 'series',
  initialState,
  reducers: {
    loadseries: (state, action) => {
      state.info = action.payload;
    },
    removeseries: (state, action) => {
      state.info = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loadseries, removeseries } = seriesSlice.actions;

export default seriesSlice.reducer;
