import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PortfolioState from './ContextApi/PortfolioState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PortfolioState>
      <App />
    </PortfolioState>
  </React.StrictMode>
);

