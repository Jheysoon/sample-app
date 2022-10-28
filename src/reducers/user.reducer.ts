import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserState } from '~/common/interfaces/userState';
import { RootState } from '../store';

const initialState: UserState = {
  id: '',
  first_name: '',
  last_name: '',
  middle_name: '',
  user_type: '',
  email: '',
  account_id: '',
  account_name: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state = action.payload;

      return state;
    },
  },
});

export const selectUser = (state: RootState) => state.user;

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
