import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import getClinics from '~/actions/clinics/getClinics.actions';
import getClinicRecordFromId from '~/actions/clinics/getClinicRecordFromId.actions';
import { RootState } from '~/store';

const initialState = {
  loading: false,
  list: [],
  isListFetched: false,
  recordLoading: false,
  record: {},
};

export const clinicSlice = createSlice({
  name: 'clinics',
  initialState,
  reducers: {
    setClinics: (state, action: PayloadAction<any>) => {
      state = { ...state, ...action.payload };

      return state;
    },
  },

  extraReducers: builder => {
    builder.addCase(getClinics.pending, state => {
      state.loading = true;
    });

    builder.addCase(getClinics.rejected, state => {
      state.loading = false;
    });

    builder.addCase(getClinics.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload;
      state.isListFetched = true;
    });

    builder.addCase(getClinicRecordFromId.pending, state => {
      state.recordLoading = true;
    });

    builder.addCase(getClinicRecordFromId.rejected, state => {
      state.recordLoading = false;
    });

    builder.addCase(getClinicRecordFromId.fulfilled, (state, action: PayloadAction<any>) => {
      state.recordLoading = false;
      state.record = action.payload;
    });
  },
});

export const selectClinics = (state: RootState) => state.clinics;

export const { setClinics } = clinicSlice.actions;

export default clinicSlice.reducer;
