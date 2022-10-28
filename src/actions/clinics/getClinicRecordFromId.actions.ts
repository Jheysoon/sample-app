import { createAsyncThunk } from '@reduxjs/toolkit';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { find, isUndefined, size } from 'lodash';

import { CLINICS } from '~/common/constants/modules';
import { AppDispatch, RootState } from '~/store';

const getClinicRecordFromId = createAsyncThunk<
  any,
  string,
  { dispatch: AppDispatch; state: RootState }
>('clinics/getRecordFromId', async (id: string, { getState }) => {
  const clinics = getState().clinics;

  let record: any = find(clinics.list, { id });

  if (size(record) === 0 || isUndefined(record)) {
    const db = getFirestore();
    const docRef = doc(db, CLINICS, id);
    const docSnap = await getDoc(docRef);

    record = docSnap.data();
  }

  return record;
});

export default getClinicRecordFromId;
