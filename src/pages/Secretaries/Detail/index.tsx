import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';

import BackButton from '~/common/components/BackButton';
import FormField from '~/common/components/FormField';
import SecrtryFormActions from './SecrtryFormActions';

import getRecordFromId from '~/actions/secretaries/getRecordFromId.actions';
import { getSexLabel } from '~/common/constants/sex';
import { useAppDispatch } from '~/hooks';
import { selectSecretaries } from '~/reducers/secretaries.reducer';

const SecretaryDetail = () => {
  const dispatch = useAppDispatch();
  const { record, isListFetched }: any = useSelector(selectSecretaries);
  const { id }: any = useParams();

  useEffect(() => {
    if (isListFetched === false) {
      dispatch(getRecordFromId(id));
    }

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <BackButton link="/Secretaries" text="Secretaries" />
      <Card sx={{ marginTop: 1 }}>
        <CardContent>
          <SecrtryFormActions />
          <Grid container spacing={2} sx={{ marginTop: 0.6 }}>
            <Item>
              <FormField label="First Name" value={record.first_name} />
            </Item>
            <Item>
              <FormField label="Last Name" value={record.last_name} />
            </Item>
            <Item>
              <FormField label="Suffix" value={record.suffix} />
            </Item>
            <Item>
              <FormField label="Birthday" value={record.birthdate} />
            </Item>
            <Item>
              <FormField label="Mobile Number" value={record.mobile_number} />
            </Item>
            <Item>
              <FormField label="Sex" value={getSexLabel(record.sex)} />
            </Item>
            <Item>
              <FormField label="Address" value={record.address} />
            </Item>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

const Item = ({ children }: any) => (
  <Grid item xs={6} sx={{ minHeight: 8 }}>
    {children}
  </Grid>
);

export default SecretaryDetail;
