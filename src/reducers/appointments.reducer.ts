import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import dayjs from 'dayjs';
import { forEach } from 'lodash';

import { DB_DATE_FORMAT } from '~/common/constants/date';
import { RootState } from '../store';

const initialState = {
  loading: false,
  list: [],
  forToday: [],
};

export const appoinmentSlice = createSlice({
  name: 'appoinments',
  initialState,
  reducers: {
    setAppointments: (state, action: PayloadAction<any>) => {
      state = { ...state, ...action.payload };

      const TODAY = dayjs().format(DB_DATE_FORMAT);
      const forToday: any = [];

      forEach(state.list, (list: any) => {
        if (list.appointment_date === TODAY) {
          forToday.push(list);
        }
      });

      state.forToday = forToday;

      return state;
    },

    setRecord: (state, action: PayloadAction<any>) => {},
  },
});

export const selectAppointments = (state: RootState) => state.appointments;

export const { setAppointments } = appoinmentSlice.actions;

export default appoinmentSlice.reducer;
