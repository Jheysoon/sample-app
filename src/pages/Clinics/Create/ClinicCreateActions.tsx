import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import RightAlignContent from '~/common/components/RightAlignContent';

const ClinicCreateActions = () => {
  return (
    <>
      <Grid container direction="row" justifyContent="space-around" alignItems="center">
        <Grid item md={10}></Grid>
        <Grid item md={2}>
          <RightAlignContent>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                //
              }}
            >
              Save
            </Button>
          </RightAlignContent>
        </Grid>
      </Grid>
    </>
  );
};

export default ClinicCreateActions;
