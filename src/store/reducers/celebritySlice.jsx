import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  info: null,
};

export const celebritySlice = createSlice({
  name: 'celebrity',
  initialState,
  reducers: {
    loadcelebrity: (state, action) => {
      state.info = action.payload;
    },
    removecelebrity: (state, action) => {
      state.info = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loadcelebrity, removecelebrity } = celebritySlice.actions;

export default celebritySlice.reducer;
