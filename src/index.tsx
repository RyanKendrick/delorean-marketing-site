import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../src/styles/Header.scss'
import '../src/styles/Global.scss'
import '../src/styles/Section1.scss'
import '../src/styles/Section2.scss'
import '../src/styles/Section3.scss'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

