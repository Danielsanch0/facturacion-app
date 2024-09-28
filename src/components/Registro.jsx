
import { Link } from 'react-router-dom'; // Importa el componente Link
import './Registro.css';

const Registro = () => {
  return (
    <div className="registro">
      <aside className="sidebar">
                <div className="admin-icon">
                <img src="src/img/LoginPro.jpeg" alt="Profile Icon" className="login" />
                </div>
                    <p>Administrador</p>
                <nav>
                    <ul>
                        <li>
                            <Link to="/facturapro">Registro de Facturas</Link>
                        </li>
                        <li>
                            <Link to="/registro">Control de Gastos</Link>
                        </li>
                        <li>
                            <Link to="/reporte">Reportes Financieros</Link>
                        </li>
                    </ul>
                </nav>
            </aside>
      <div className="main-content">
        <div className="header">
          <div className="title">Control de Gastos</div>
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
