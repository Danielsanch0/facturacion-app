import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import FacturaPro from './components/FacturaPro';
import './components/FacturaPro.css';
import Login from './components/login';
import Registro from './components/Registro';
import Reporte from './components/Reporte';
import './index.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/facturapro" element={<FacturaPro />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/reporte" element={<Reporte />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
