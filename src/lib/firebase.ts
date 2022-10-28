import { addDoc, collection, doc, getDoc, getFirestore } from 'firebase/firestore';

type ModuleType =
  | 'medicines'
  | 'patients'
  | 'dosage_instructions'
  | 'appointments'
  | 'accounts'
  | 'users'
  | 'subscriptions'
  | 'prescriptions'
  | 'secretaries';

export const insert = async (module: string, data: any) => {
  const db = getFirestore();

  const docRef = await addDoc(collection(db, module), data);

  return docRef;
};

export const get = async (module: string, id: string) => {
  const db = getFirestore();

  const docRef = doc(db, module, id);

  const docSnap = await getDoc(docRef);

  return docSnap.data();
};
