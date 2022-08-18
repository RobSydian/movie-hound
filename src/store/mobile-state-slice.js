import { createSlice } from '@reduxjs/toolkit';

const mobileStateHandler = createSlice({
  name: 'mobile state handler',
  initialState: {
    isMobile: false,
  },
  reducers: {
    isMobile(state, action) {
      const newMobileState = action.payload;

      newMobileState ? (state.isMobile = true) : (state.isMobile = false);
    },
  },
});

export const mobileStateActions = mobileStateHandler.actions;

export default mobileStateHandler;
