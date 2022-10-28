import { collection, getDocs, getFirestore, orderBy, query, where } from 'firebase/firestore';

import { setAppointments } from '~/reducers/appointments.reducer';
import { AppDispatch } from '~/store';

import { APPOINTMENTS } from '~/common/constants/modules';

const getAppointments = () => async (dispatch: AppDispatch, getState: any) => {
  dispatch(
    setAppointments({
      loading: true,
    })
  );

  const db = getFirestore();
  const user = getState().user;

  const appointmentsRef = collection(db, APPOINTMENTS);

  const q = query(
    appointmentsRef,
    where('account_id', '==', user.account_id),
    orderBy('appointment_date', 'desc')
  );

  const appoinments = await getDocs(q);

  const list: any = [];

  appoinments.forEach(doc => {
    list.push({ id: doc.id, ...doc.data() });
  });

  dispatch(
    setAppointments({
      loading: false,
      list,
    })
  );
};

export default getAppointments;
