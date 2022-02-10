import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import timeplay from './play';
import accuracy from './accuracy';

export const synthetic = configureStore({
  reducer: {
    timeplay: timeplay,
    accuracy: accuracy,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof synthetic.getState>;
export type AppDispatch = typeof synthetic.dispatch;