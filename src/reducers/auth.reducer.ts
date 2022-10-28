import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';

const initialState = {
  message: '',
  loading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<any>) => {
      state = { ...state, ...action.payload };

      return state;
    },
  },
});

export const selectAuth = (state: RootState) => state.auth;

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
