import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';


const originalFetch = window.fetch;
window.fetch = (...args) => {
  console.log('Fetch called with:', ...args);
  return originalFetch(...args);
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
