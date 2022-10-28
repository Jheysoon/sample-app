import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import deleteRecord from '~/actions/secretaries/deleteRecord.actions';
import getRecordFromId from '~/actions/secretaries/getRecordFromId.actions';
import getSecretaries from '~/actions/secretaries/getSecretaries.actions';
import { RootState } from '~/store';

const initialState = {
  loading: false,
  list: [],
  isListFetched: false,
  record: {}, // fill default values here
  recordLoading: false,
  isDeletingLoading: false,
  hasDeleted: false,
};

export const secretariesSlice = createSlice({
  name: 'secretaries',
  initialState,
  reducers: {
    setSecretaries: (state, action: PayloadAction<any>) => {
      // use current when accessing the state https://redux-toolkit.js.org/api/other-exports#current

      state = { ...state, ...action.payload };

      return state;
    },
  },

  extraReducers: builder => {
    // secretaries list view
    builder.addCase(getSecretaries.pending, state => {
      state.loading = true;
    });

    builder.addCase(getSecretaries.rejected, state => {
      state.loading = false;
    });

    builder.addCase(getSecretaries.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload;
      state.isListFetched = true;
    });

    // secretaries record view
    builder.addCase(getRecordFromId.pending, state => {
      state.recordLoading = true;
    });

    builder.addCase(getRecordFromId.rejected, state => {
      state.recordLoading = false;
    });

    builder.addCase(getRecordFromId.fulfilled, (state, action: PayloadAction<any>) => {
      const { first_name, last_name } = action.payload;
      state.recordLoading = false;
      state.record = {
        ...action.payload,
        fullName: first_name + ' ' + last_name,
      };
    });

    // secretary delete
    builder.addCase(deleteRecord.pending, state => {
      state.isDeletingLoading = true;
    });

    builder.addCase(deleteRecord.rejected, state => {
      state.isDeletingLoading = false;
    });

    builder.addCase(deleteRecord.fulfilled, state => {
      state.isDeletingLoading = false;
      state.hasDeleted = true;
    });
  },
});

export const selectSecretaries = (state: RootState) => state.secretaries;

export const { setSecretaries } = secretariesSlice.actions;

export default secretariesSlice.reducer;
