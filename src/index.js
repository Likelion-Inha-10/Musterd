import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import reportWebVitals from './reportWebVitals';
import Router from './routes';
import ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: gray;
`;

const Layout = styled.div`
  height: 100vh;
  min-height: 640px;
  width: 100vh;
  min-width: 320px;
  max-width: 500px;
  background-color: white;
`;

const GlobalStyles = createGlobalStyle`
  ${reset}
  html, body, #root {
    display: flex;
    height: 100%;
    width: 100%;
  }
  
  * {
    box-sizing: border-box;
    font-family: 'Spoqa Han Sans Neo', 'sans-serif' !important;
    outline: none;
  }
`;

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <GlobalStyles />
      <Wrapper>
        <Layout>
          <Router />
        </Layout>
      </Wrapper>
    </React.StrictMode>
  </Provider>
);

reportWebVitals();
