import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteDoc, doc, getFirestore } from 'firebase/firestore';

import { SECRETARIES } from '~/common/constants/modules';

const deleteRecord = createAsyncThunk<void, string>('secretaries/deleteRecord', async id => {
  const db = getFirestore();

  await deleteDoc(doc(db, SECRETARIES, id));
});

export default deleteRecord;
