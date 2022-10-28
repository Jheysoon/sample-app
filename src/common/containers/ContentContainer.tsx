import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import { useSelector, useDispatch } from 'react-redux';

import AppHeader from '../components/AppHeader';

import { setUser, selectUser } from '~/reducers/user.reducer';

import { get } from '~/lib/firebase';

import { USERS } from '~/common/constants/modules';

const ContentContainer = ({ children }: any) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = getAuth();
  const _user = useSelector(selectUser);
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (!user && loading === false) {
      // user not found redirect to login
      navigate('/');
    }

    if (user && loading === false && _user.id === '') {
      fillUser(user, dispatch);
    }

    // eslint-disable-next-line
  }, [user, navigate, loading]);

  return <AppHeader>{children}</AppHeader>;
};

const fillUser = async (_user: any, dispatch: any) => {
  const userData: any = await get(USERS, _user.uid);

  const _userData = {
    ...userData,
    id: _user.uid,
    uid: _user.uid,
  };

  dispatch(setUser(_userData));
};

export default ContentContainer;
