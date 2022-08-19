import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import reportWebVitals from './reportWebVitals';
import Router from './routes';
import ReactDOMClient from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import store from './redux/store';
import theme from './assets/theme';
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Layout = styled.div`
  height: 100vh;
  min-height: 640px;
  width: 100vh;
  min-width: 320px;
  max-width: 500px;
`;

const GlobalStyles = createGlobalStyle`
  ${reset}
  html, body, #root {
    display: flex;
    height: 100%;
    width: 100%;
    background-color:#F7F6F2;
  }
  
  * {
    box-sizing: border-box;
    @font-face {
      font-family: "NotoSansKR";
      //src: url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;1,100;1,300&display=swap');
      unicode-range: U+0041-005A, U+0061-007A;
    }
    @font-face {
      font-family: 'Roboto Slab', serif;
      //src: url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;1,100;1,300&display=swap');
      font-style: normal;
    }
    outline: none;
  }
`;

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <GlobalStyles />
        <Wrapper>
          <Layout>
            <Router />
          </Layout>
        </Wrapper>
      </React.StrictMode>
    </ThemeProvider>
  </Provider>
);

reportWebVitals();
