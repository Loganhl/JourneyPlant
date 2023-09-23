import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PlantsContextProvider } from './context/PlantContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PlantsContextProvider>
      <App />
    </PlantsContextProvider>
  </React.StrictMode>
);

