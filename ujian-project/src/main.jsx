import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Pastikan ini ada jika Anda menggunakan CSS
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)