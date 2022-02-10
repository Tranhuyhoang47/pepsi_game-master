import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const Play = createSlice({
  name: 'timeplay',
  initialState: {
    timeplay_exchange: 5,
    timeplay_free: 3,
    current_play_type: '',
  },
  reducers: {
    incrementExchange: state => {
      state.timeplay_exchange += 1;
    },
    decrementExchange: state => {
      if (state.timeplay_exchange > 0) {
        state.timeplay_exchange -= 1;
      }
    },
    incrementFree: state => {
      state.timeplay_free += 1;
    },
    decrementFree: state => {
      if (state.timeplay_free > 0) {
        state.timeplay_free -= 1;
      }
    },
    setPlay: (state, action: PayloadAction<string>) => {
      state.current_play_type = action.payload;
    },
  },
});

export const {
  incrementExchange,
  decrementExchange,
  incrementFree,
  decrementFree,
  setPlay,
} = Play.actions;
export default Play.reducer;