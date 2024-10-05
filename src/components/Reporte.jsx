import { Link } from 'react-router-dom'; 
import './Registro.css';

const Reporte = () => {
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
                            <Link to="/reportes">Reportes Financieros</Link>
                        </li>
                    </ul>
                </nav>
            </aside>
            <div className="title">Reportes</div>
        </div>

        
        );
    };
export default Reporte;