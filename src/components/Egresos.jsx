import React from "react";
import './Egresos.css';

const Egresos = () => {
    return (
        <div className="container">
            <div className="sidebar">
                <div className="profile">
                    <img src="src/img/LoginPro.jpeg" alt="Logo Factura Pro" />
                    
                </div>
                <ul className="menu">
                    <li><a href="/FacturaPro">Registro de Facturas</a></li>
                    <li><a href="/Registro">Control de Gastos</a></li>
                    <li><a href="/Egresos">Reportes Financieros</a></li>
                </ul>
            </div>

            <div className="main-content">
                <h1>Reporte sobre ingresos y egresos</h1>
                <div className="report">
                    <div className="section">
                        <h2>Ingresos</h2>
                        <div className="download-icons">
                            <img src="src\img\microsoft-excel-logo-icon-free-download-free-vector.jpg" alt="Descargar Excel" />
                            <img src="src\img\pdf-icon-11549528510ilxx4eex38.png" alt="Descargar PDF" />
                        </div>
                    </div>
                    <div className="section">
                        <h2>Egresos</h2>
                        <div className="download-icons">
                            <img src="src\img\microsoft-excel-logo-icon-free-download-free-vector.jpg" alt="Descargar Excel" />
                            <img src="src\img\pdf-icon-11549528510ilxx4eex38.png" alt="Descargar PDF" />
                        </div>
                    </div>
                </div>

                <div className="actions">
                    <button className="btn guardar">Guardar</button>
                    <button className="btn cancelar">Cancelar</button>
                </div>
            </div>
        </div>
    );
};

export default Egresos;
