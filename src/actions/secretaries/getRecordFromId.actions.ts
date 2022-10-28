import { createAsyncThunk } from '@reduxjs/toolkit';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { find, isUndefined, size } from 'lodash';

import { SECRETARIES } from '~/common/constants/modules';
import { AppDispatch, RootState } from '~/store';

const getRecordFromId = createAsyncThunk<any, string, { dispatch: AppDispatch; state: RootState }>(
  'secretaries/getRecordFromId',
  async (id: string, { getState }) => {
    const secretaries = getState().secretaries;

    let record: any = find(secretaries.list, { id });

    if (size(record) === 0 || isUndefined(record)) {
      const db = getFirestore();
      const docRef = doc(db, SECRETARIES, id);
      const docSnap = await getDoc(docRef);

      record = docSnap.data();
    }

    return record;
  }
);

export default getRecordFromId;
