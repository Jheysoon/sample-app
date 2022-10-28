import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { size } from 'lodash';

import Paper from '@mui/material/Paper';

import PageContent from '~/common/components/PageContent';

import getAppointments from '~/actions/appointments/getAppointments.actions';
import { selectAppointments } from '~/reducers/appointments.reducer';

import { useAppDispatch } from '~/hooks';

const DashBoardPage = () => {
  const dispatch = useAppDispatch();
  const appointments = useSelector(selectAppointments);

  useEffect(() => {
    if (size(appointments.list) === 0) {
      dispatch(getAppointments());
    }

    // eslint-disable-next-line
  }, []);

  return (
    <PageContent>
      <Paper sx={{ padding: 1 }}>
        <h2 style={{ textAlign: 'center' }}>
          Appointment For Today ({size(appointments.forToday)})
        </h2>
      </Paper>
    </PageContent>
  );
};

export default DashBoardPage;
