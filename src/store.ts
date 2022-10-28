import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import appointments from '~/reducers/appointments.reducer';
import auth from '~/reducers/auth.reducer';
import secretaries from '~/reducers/secretaries.reducer';
import user from '~/reducers/user.reducer';
import clinics from '~/reducers/clinics.reducer';

export const store = configureStore({
  reducer: { auth, user, appointments, secretaries, clinics },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

/* Types */
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
