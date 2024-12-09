import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '../src/pages/App';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRoutes from './routes/Main.routes';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <MainRoutes />
    </Router>
  </StrictMode>,
);
