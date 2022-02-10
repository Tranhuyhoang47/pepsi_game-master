import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const accuracy = createSlice({
  name: 'accuracy',
  initialState: {
    confirm: null,
  },
  reducers: {
    saveConfirm: (state, action: PayloadAction<any>) => {
      state.confirm = action.payload;
    },
  },
});

export const {saveConfirm} = accuracy.actions;
export default accuracy.reducer;