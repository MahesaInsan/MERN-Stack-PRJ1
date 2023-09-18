import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CardContextProvider } from './contexts/CardContext';
import { AuthContextProvider } from './contexts/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <CardContextProvider>
        <App />
      </CardContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
