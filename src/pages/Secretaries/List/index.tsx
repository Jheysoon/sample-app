import { ColumnDef } from '@tanstack/react-table';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';

import CoreTable from '~/common/components/CoreTable';
import ListHeader from '~/common/components/ListHeader';

import getRecordFromId from '~/actions/secretaries/getRecordFromId.actions';
import getSecretaries from '~/actions/secretaries/getSecretaries.actions';
import { selectSecretaries } from '~/reducers/secretaries.reducer';
import { selectUser } from '~/reducers/user.reducer';

import { useAppDispatch, useAppSelector } from '~/hooks';

const SecretariesList = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isListFetched, list } = useAppSelector(selectSecretaries);
  const user = useAppSelector(selectUser);

  useEffect(() => {
    if (isListFetched === false && user.id !== '') {
      dispatch(getSecretaries());
    }

    // eslint-disable-next-line
  }, [user]);

  const columns: ColumnDef<any>[] = [
    {
      id: 'name',
      accessorFn: (row: any) => `${row.first_name} ${row.last_name}`,
      header: 'Name',
      cell: (info: any) => {
        return (
          <Link
            component="button"
            onClick={e => {
              e.preventDefault();

              const id = info.row.original.id;

              dispatch(getRecordFromId(id));

              navigate('/Secretaries/' + id);
            }}
          >
            {info.getValue()}
          </Link>
        );
      },
    },
    {
      accessorKey: 'mobile_number',
      header: 'Mobile Number',
      cell: (info: any) => info.getValue(),
    },
  ];

  return (
    <>
      <ListHeader headerText={'Secretaries'} hasCreateButton />
      <Paper sx={{ padding: 1 }}>
        <CoreTable columns={columns} data={list} />
      </Paper>
    </>
  );
};

export default SecretariesList;
