import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orgin: null,
  destination: null,
  timeTravelInformation: null,
};

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducer: {
    setOrigin: (state, action) => {
      state.orgin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTimeTravelInformation: (state, action) => {
      state.timeTravelInformation = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setTimeTravelInformation } =
  navSlice.actions;

export const selectOrigin = () => state.nav.origin;
export const selectDestination = () => state.nav.destination;
export const selectTimeTravelInformation = () =>
  state.nav.timeTravelInformation;

export default navSlice.reducer;
