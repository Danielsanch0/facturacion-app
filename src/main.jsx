import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import './index.css';
import Login from './components/login';
import FacturaPro from './components/FacturaPro';
import './components/FacturaPro.css';
import Registro from './components/Registro';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/facturapro" element={<FacturaPro />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
