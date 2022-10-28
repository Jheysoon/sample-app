import { useState } from 'react';
import { useParams } from 'react-router-dom';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import ConfirmDialog from '~/common/components/ConfirmDialog';
import RightAlignContent from '~/common/components/RightAlignContent';

import deleteRecord from '~/actions/secretaries/deleteRecord.actions';
import { useAppDispatch } from '~/hooks';

const SecrtryFormActions = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { id }: any = useParams();

  // set hasDelete = false

  const onDelete = () => {
    // show dialog before completely deleting the record
    setOpen(true);
  };

  const onClickOk = () => {
    // dispatch(deleteRecord(id));
    setOpen(false);
  };

  return (
    <>
      <ConfirmDialog
        open={open}
        title="Are you sure?"
        text="You want to delete this secretary ?"
        handleCancel={() => {
          setOpen(false);
        }}
        handleOk={onClickOk}
        okText="Yes, delete it!"
      />
      <Grid container direction="row" justifyContent="space-around" alignItems="center">
        <Grid item md={10}></Grid>
        <Grid item md={2}>
          <RightAlignContent>
            <Button variant="contained" color="error" onClick={onDelete}>
              Delete
            </Button>
          </RightAlignContent>
        </Grid>
      </Grid>
    </>
  );
};

export default SecrtryFormActions;
