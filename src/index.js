import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalContextProvider from './context/GlobalContext';
import ThemeContexProvider from './context/ThemeContex';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeContexProvider>
    <GlobalContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </GlobalContextProvider>
  </ThemeContexProvider>
);
