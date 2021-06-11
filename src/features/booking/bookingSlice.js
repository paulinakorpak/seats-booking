import { createSlice } from '@reduxjs/toolkit';
import bookingSteps from './bookingSteps';

const initialState = {
  step: bookingSteps[0],
  seatsNumber: 0,
  adjacentSeats: false,
  bookedSeatIds: [],
};

export const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setNextStep: (state) => {
      const stepIndex = bookingSteps.findIndex((step) => step === state.step);
      state.step = bookingSteps[stepIndex + 1];
    },
    setSeatsNumber: (state, action) => {
      state.seatsNumber = action.payload;
    },
    setAdjacentSeats: (state, action) => {
      state.adjacentSeats = action.payload;
    },
    setBookedSeatIds: (state, action) => {
      state.bookedSeatIds = action.payload;
    },
  },
});

export const {
  setNextStep, setSeatsNumber, setAdjacentSeats, setBookedSeatIds,
} = bookingSlice.actions;

export const selectStep = (state) => state.booking.step;
export const selectSeatsNumber = (state) => state.booking.seatsNumber;
export const selectAdjacentSeats = (state) => state.booking.adjacentSeats;
export const selectBookedSeatIds = (state) => state.booking.bookedSeatIds;

export default bookingSlice.reducer;
