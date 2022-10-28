import ENV, { DEV, PROD, QA } from './env';

let firebaseConfig = {};

if (ENV === DEV) {
  firebaseConfig = {
    projectId: '',
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
    measurementId: '',
  };
}

if (ENV === QA) {
  firebaseConfig = {
    projectId: '',
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
  };
}

if (ENV === PROD) {
  firebaseConfig = {
    projectId: '',
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
  };
}

export default firebaseConfig;
