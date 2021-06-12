import { configureStore } from '@reduxjs/toolkit';
import bookingReducer from '../features/booking/bookingSlice';
import messageReducer from '../features/message/messageSlice';

const store = configureStore({
  reducer: {
    booking: bookingReducer,
    message: messageReducer,
  },
});

export default store;
