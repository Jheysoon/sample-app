import { getAuth, signOut } from 'firebase/auth';
import { NavigateFunction } from 'react-router-dom';

import { ACCOUNTS, USERS, SUBSCRIPTIONS } from '~/common/constants/modules';
import { SUPER_ADMIN } from '~/common/constants/userTypes';

import { AppDispatch } from '~/store';
import { setAuth } from '~/reducers/auth.reducer';

import { get } from '~/lib/firebase';

import { UserState } from '~/common/interfaces/userState';

const fillUser =
  (userId: string, navigate: NavigateFunction) =>
  async (dispatch: AppDispatch) => {
    const auth = getAuth();

    dispatch(
      setAuth({
        message: '',
        loading: true,
      })
    );

    const user: any = await get(USERS, userId);

    const userData = JSON.stringify({ ...user, id: userId, uid: userId });

    if (user.user_type === SUPER_ADMIN) {
      window.localStorage.setItem('user', userData);

      dispatch(
        setAuth({
          loading: false,
        })
      );

      return navigate('/Accounts');
    }

    const subscription: any = await get(SUBSCRIPTIONS, user.account_id);

    if (subscription.status === 'active') {
      const account = await get(ACCOUNTS, user.account_id);

      // set user
      window.localStorage.setItem('user', userData);

      // set account
      window.localStorage.setItem(
        'account',
        JSON.stringify({ ...account, id: user.account_id })
      );

      dispatch(
        setAuth({
          loading: false,
        })
      );

      return navigate('/dashboard');
    }

    signOut(auth);

    dispatch(
      setAuth({
        message:
          "Your subscription has ended. Please contact system's administrator, and renew your subscription.",
        loading: false,
      })
    );
  };

export default fillUser;
