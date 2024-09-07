import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DateProvider, DateContext } from './Context/DateContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

export {DateContext}

root.render(
  <React.StrictMode>
    <DateProvider>
    <App />
    </DateProvider>
  </React.StrictMode>
);
