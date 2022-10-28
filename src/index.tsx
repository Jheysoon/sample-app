import { ThemeProvider } from '@mui/material/styles';
import { initializeApp } from 'firebase/app';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import CssBaseline from '@mui/material/CssBaseline';

import firebaseConfig from '~/common/config/firebase';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import theme from './theme';

import { store } from './store';

initializeApp(firebaseConfig);

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
