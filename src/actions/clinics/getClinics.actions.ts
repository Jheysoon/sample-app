import { createAsyncThunk } from '@reduxjs/toolkit';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

import { CLINICS } from '~/common/constants/modules';
import { RootState } from '~/store';

const getClinics = createAsyncThunk<any, void, { state: RootState }>(
  'clinics/getClinics',
  async (_, { getState }) => {
    const db = getFirestore();
    const user = getState().user;

    const collectionRef = collection(db, CLINICS);

    const q = query(collectionRef, where('account_id', '==', user.account_id));

    const _list = await getDocs(q);

    const list: any = [];

    _list.forEach(doc => {
      list.push({ id: doc.id, ...doc.data() });
    });

    return list;
  }
);

export default getClinics;
