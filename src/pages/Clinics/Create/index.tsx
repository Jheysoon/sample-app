import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { Form, Formik } from 'formik';

import BackButton from '~/common/components/BackButton';
import MaskField from '~/common/fields/MaskField';
import SelectField from '~/common/fields/SelectField';
import TextInput from '~/common/fields/TextInput';
import ClinicCreateActions from './ClinicCreateActions';

import DAYS_OPTIONS from '~/common/constants/days';
import TIMES_OPTIONS from '~/common/constants/time';

const ClinicCreate = () => {
  return (
    <>
      <BackButton link="/Clinics" text="Clinics" />
      <Card sx={{ marginTop: 1 }}>
        <CardContent>
          <ClinicCreateActions />

          <Formik
            initialValues={{
              clinic_days: [],
              clinic_start_time: [],
              clinic_end_time: [],
            }}
            onSubmit={() => {}}
          >
            <Form>
              <Grid container spacing={2} sx={{ marginTop: 0.6 }}>
                <Item>
                  <TextInput name="name" label="Clinic Name" />
                </Item>

                <Item>
                  <TextInput name="address" label="Clinic Address" />
                </Item>

                <Item>
                  <MaskField name="phone_number" label="Clinic Phone Number" mask="####-###-####" />
                </Item>

                <Item>
                  <SelectField
                    name="clinic_days"
                    label="Clinic Days"
                    options={DAYS_OPTIONS}
                    multiple
                  />
                </Item>

                <Item>
                  <SelectField
                    name="clinic_start_time"
                    label="Clinic Start Time"
                    options={TIMES_OPTIONS}
                    multiple
                  />
                </Item>

                <Item>
                  <SelectField
                    name="clinic_end_time"
                    label="Clinic End Time"
                    options={TIMES_OPTIONS}
                    multiple
                  />
                </Item>
              </Grid>
            </Form>
          </Formik>
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

export default ClinicCreate;
