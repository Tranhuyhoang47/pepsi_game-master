import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Alert} from 'react-native';

const INITIAL_STATE = {
  user: {
    timeplay_exchange: 0,
    timeplay_free: 0,
    name: '',
    phone_number: '',
    collection: {},
    gifts: [],
  },
  current_play_type: '', // get value either "exchange" or "free"
  name: '',
  phone_number: '',
  reward: null,
  is_getting_reward: false,
  isUpdatingUser: false,
  isExchangingCombo: false,
  exchange_combo_result: [],
  gift_store: [],
  isGettingGiftStore: false,
  isSavingGiftData: false,
  isSavedGiftDataSuccessful: false,
};

const Play = createSlice({
  name: 'timeplay',
  initialState: {
    user: {
    timeplay_exchange: 0,
    timeplay_free: 0,
    name: '',
    phone_number: '',
    collection: {},
    gifts: [],
  },
    current_play_type: '',
    reward: null,
  },
  reducers: {
    incrementExchange: state => {
      state.user.timeplay_exchange += 1;
    },
    decrementExchange: state => {
      if (state.user.timeplay_exchange > 0) {
        state.user.timeplay_exchange -= 1;
      }
    },
    resetReward: state => {
      state.reward = null;
    },
    incrementFree: state => {
      state.user.timeplay_free += 1;
    },
    decrementFree: state => {
      if (state.user.timeplay_free > 0) {
        state.user.timeplay_free -= 1;
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
  resetReward,
  setPlay,
} = Play.actions;
export default Play.reducer;