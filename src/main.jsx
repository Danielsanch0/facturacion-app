import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from './components/login'
import FacturaPro from './components/FacturaPro'; 
import './components/FacturaPro.css'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
    <FacturaPro/>
  </StrictMode>,
)
