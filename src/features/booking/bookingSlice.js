import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  seatsNumber: 0,
  adjacentSeats: false,
};

export const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setSeatsNumber: (state, action) => {
      state.seatsNumber = action.payload;
    },
    setAdjacentSeats: (state, action) => {
      state.adjacentSeats = action.payload;
    },
  },
});

export const { setSeatsNumber, setAdjacentSeats } = bookingSlice.actions;

export const selectSeatsNumber = (state) => state.booking.seatsNumber;
export const selectAdjacentSeats = (state) => state.booking.adjacentSeats;

export default bookingSlice.reducer;
