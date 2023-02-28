import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
import './assets/styles/main.css';
import App from './App';
import { AuthProvider } from './services/Auth/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HelmetProvider>
      <Router>
        <AuthProvider>
          <App />
        </AuthProvider>
      </Router>
    </HelmetProvider>
);
