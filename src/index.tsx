import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../src/styles/Header.scss'
import '../src/styles/Global.scss'
import '../src/styles/Section1.scss'
import '../src/styles/Section2.scss'
import '../src/styles/Section3.scss'
import '../src/styles/Section4.scss'
import '../src/styles/Section5.scss'
import '../src/styles/Section6.scss'
import '../src/styles/Section7.scss'
import '../src/styles/Footer.scss'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

