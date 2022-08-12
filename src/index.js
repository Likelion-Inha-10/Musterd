import React from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import reportWebVitals from './reportWebVitals';
import Router from './routes';
import ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';

const GlobalStyles = createGlobalStyle`
  ${reset}
`;

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <GlobalStyles />
      <Router />
    </React.StrictMode>
  </Provider>
);

reportWebVitals();
