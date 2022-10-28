import {
  AuthErrorCodes,
  browserLocalPersistence,
  getAuth,
  setPersistence,
  signOut,
} from 'firebase/auth';
import { useEffect } from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '~/hooks';
import { selectAuth, setAuth } from '~/reducers/auth.reducer';
import { setUser } from '~/reducers/user.reducer';

import { get } from '~/lib/firebase';

import { ACCOUNTS, SUBSCRIPTIONS, USERS } from '~/common/constants/modules';
import { SUPER_ADMIN } from '~/common/constants/userTypes';

const useAuthencateUser = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const _auth = useAppSelector(selectAuth);
  const [_user, _loading] = useAuthState(auth);

  setPersistence(auth, browserLocalPersistence);

  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

  let errorMessage: string = error?.message || _auth.message;

  if (error?.code === AuthErrorCodes.INVALID_PASSWORD) {
    errorMessage = 'Authentication Failed: Wrong Password';
  }

  useEffect(() => {
    if (user?.user && loading === false) {
      checkUser();
    }

    if (_user && _loading === false) {
      navigate('/dashboard');
    }

    // eslint-disable-next-line
  }, [user, loading, _loading]);

  const isLoading = loading || _auth.loading;

  const authencateUser: any = (email: string, password: string) => {
    signInWithEmailAndPassword(email, password);
  };

  const checkUser = async () => {
    const _user: any = user?.user;

    const userData: any = await get(USERS, _user.uid);

    const _userData = {
      ...userData,
      id: _user.uid,
      uid: _user.uid,
    };

    dispatch(setUser(_userData));

    localStorage.setItem('user', JSON.stringify(_userData));

    if (userData.user_type === SUPER_ADMIN) {
      return navigate('/Accounts');
    }

    const subscription: any = await get(SUBSCRIPTIONS, userData.account_id);

    if (subscription.status === 'active') {
      const account = await get(ACCOUNTS, userData.account_id);

      // set account
      localStorage.setItem('account', JSON.stringify({ ...account, id: userData.account_id }));

      dispatch(
        setAuth({
          loading: false,
        })
      );

      navigate('/dashboard');

      return;
    }

    signOut(auth);

    localStorage.clear();

    dispatch(
      setAuth({
        message:
          "Your subscription has ended. Please contact system's administrator, and renew your subscription.",
        loading: false,
      })
    );
  };

  return [isLoading, authencateUser, errorMessage, user];
};

export default useAuthencateUser;
