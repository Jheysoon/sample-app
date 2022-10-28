import { ColumnDef } from '@tanstack/react-table';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';

import CoreTable from '~/common/components/CoreTable';
import ListHeader from '~/common/components/ListHeader';

import getClinicRecordFromId from '~/actions/clinics/getClinicRecordFromId.actions';
import getClinics from '~/actions/clinics/getClinics.actions';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { selectClinics } from '~/reducers/clinics.reducer';
import { selectUser } from '~/reducers/user.reducer';

const ClinicsList = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const { isListFetched, list } = useAppSelector(selectClinics);

  useEffect(() => {
    if (isListFetched === false && user.id !== '') {
      dispatch(getClinics());
    }
  }, [user, isListFetched, dispatch]);

  const columns: ColumnDef<any>[] = [
    {
      accessorKey: 'name',
      header: 'Clinic Name',
      cell: (info: any) => {
        return (
          <Link
            component="button"
            onClick={e => {
              e.preventDefault();

              const id = info.row.original.id;

              dispatch(getClinicRecordFromId(id));

              navigate('/Clinics/' + id);
            }}
          >
            {info.getValue()}
          </Link>
        );
      },
    },
  ];

  return (
    <>
      <ListHeader
        headerText="Clinics"
        hasCreateButton
        createFn={() => {
          navigate('/Clinics/create');
        }}
      />
      <Paper sx={{ padding: 1, width: '100%', overflow: 'hidden' }}>
        <CoreTable columns={columns} data={list} />
      </Paper>
    </>
  );
};

export default ClinicsList;
