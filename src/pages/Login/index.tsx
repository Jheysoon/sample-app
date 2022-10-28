import { Form, Formik } from 'formik';

import Alert from '@mui/material/Alert';
import CardContent from '@mui/material/CardContent';

import logo from '~/assets/images/logo2.png';
import Button from '~/common/components/Button';
import FormLoader from '~/common/components/FormLoader';
import TextInput from '~/common/fields/TextInput';
import { CstmBox, CstmCard, CstmCardMedia } from './components';

import useAuthencateUser from './useAuthencateUser';

const LoginPage = () => {
  const [isLoading, authencateUser, errorMessage, user] = useAuthencateUser();

  return (
    <CstmBox>
      <CstmCard>
        <CstmCardMedia component="img" image={logo} />

        {errorMessage && !user && (
          <CardContent>
            <Alert severity="error">{errorMessage}</Alert>
          </CardContent>
        )}

        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values: AuthProps) => {
            const { email, password } = values;
            authencateUser(email, password);
          }}
        >
          <CardContent>
            <Form>
              {isLoading && <FormLoader />}

              <TextInput name="email" label="Email Address" size="small" margin="none" />
              <TextInput
                name="password"
                type="password"
                label="Password"
                size="small"
                margin="normal"
              />
              <Button type="submit">Log In</Button>
            </Form>
          </CardContent>
        </Formik>
      </CstmCard>
    </CstmBox>
  );
};

type AuthProps = {
  email: string;
  password: string;
};

export default LoginPage;
