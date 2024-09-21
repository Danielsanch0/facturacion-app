import React from 'react';
import { Link } from 'react-router-dom';  // Importa el componente Link
import './Registro.css';

const Registro = () => {
  return (
    <div className="registro">
      <div className="sidebar">
        <div className="profile">
          <img src="profile-icon.png" alt="Profile Icon" className="profile-icon" />
          <div className="role">Administrador</div>
        </div>
        <ul className="menu">
          <li className="active">
           
          </li>
          <Link to="/registro">Control de Gastos</Link> 
          <li>
          <Link to="/facturapro">Registro de Facturas</Link> 
          </li>
          <li>
            <Link to="/reportes">Reportes Financieros</Link> 
          </li>
        </ul>
      </div>
      <div className="main-content">
        <div className="header">
          <div className="title">Factura Pro</div>
          <div className="date-selector">
            <input type="text" className="date-input" placeholder="dd/mm/yyyy" />
            <input type="text" className="date-input" placeholder="Fecha Final" />
            <button className="search-button">Buscar</button>
          </div>
          <input type="text" className="search-input" placeholder="Ingrese el número de la factura" />
        </div>
        <table className="invoice-table">
          <thead>
            <tr>
              <th>Número de factura</th>
              <th>Monto</th>
              <th>Categoría</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {/* Aquí puedes agregar filas dinámicamente con la información de las facturas */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Registro;
