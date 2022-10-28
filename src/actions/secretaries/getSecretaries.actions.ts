import { createAsyncThunk } from '@reduxjs/toolkit';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

import { SECRETARIES } from '~/common/constants/modules';
import { RootState } from '~/store';

const getSecretaries = createAsyncThunk<any, void, { state: RootState }>(
  'secretaries/getSecretaries',
  async (_, { getState }) => {
    const db = getFirestore();
    const user = getState().user;

    const secretaryRef = collection(db, SECRETARIES);

    const q = query(secretaryRef, where('account_id', '==', user.account_id));

    const secretaries = await getDocs(q);

    const list: any = [];

    secretaries.forEach(doc => {
      list.push({ id: doc.id, ...doc.data() });
    });

    return list;
  }
);

export default getSecretaries;
