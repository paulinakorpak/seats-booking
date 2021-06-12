import { createSlice } from '@reduxjs/toolkit';
import messages from './messageTypes';

const initialState = {
  message: null,
};

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    setMessage: (state, action) => {
      state.message = messages[action.payload];
    },
    clearMessage: (state, action) => {
      if (state.message?.id === action.payload) {
        state.message = null;
      }
    },
  },
});

export const { setMessage, clearMessage } = messageSlice.actions;
export const selectMessage = (state) => state.message.message;

export default messageSlice.reducer;
