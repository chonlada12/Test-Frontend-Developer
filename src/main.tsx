import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'react-phone-number-input/style.css';
import App from './App.tsx';
import './assets/style/index.scss';
import './config/i18n';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
