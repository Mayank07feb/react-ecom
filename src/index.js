// index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



// Get the root element from the DOM
const container = document.getElementById('root');

// Create a root using the createRoot method
const root = createRoot(container);

// Render the App component wrapped in Router
root.render(
  <Router>
    <App />
  </Router>
);
