import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Importa el componente Link
import './FacturaPro.css';

const FacturaPro = () => {
    const [factura, setFactura] = useState({
        numero: '',
        monto: '',
        categoria: '',
        fecha: ''
    });

    const handleChange = (e) => {
        setFactura({ ...factura, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Factura registrada:', factura);
        alert('Factura registrada con éxito');
    };

    return (
        <div className="factura-pro">
            <aside className="sidebar">
                <div className="admin-icon">
                    <span role="img" aria-label="admin">👤</span>
                    <p>Administrador</p>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/facturapro">Registro de Facturas</Link> {/* Enlace a la página de facturas */}
                        </li>
                        <li>
                            <Link to="/registro">Control de Gastos</Link> {/* Enlace a la página de control de gastos */}
                        </li>
                        <li>
                            <Link to="/reportes">Reportes Financieros</Link> {/* Enlace a la página de reportes */}
                        </li>
                    </ul>
                </nav>
            </aside>

            <main className="main-content">
                <h1>Factura Pro</h1>
                <div className="form-container">
                    <h2>Registro y Almacenamiento de factura</h2>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Número de Factura:
                            <input
                                type="text"
                                name="numero"
                                value={factura.numero}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Monto:
                            <input
                                type="number"
                                name="monto"
                                value={factura.monto}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Categoría:
                            <input
                                type="text"
                                name="categoria"
                                value={factura.categoria}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Fecha:
                            <input
                                type="date"
                                name="fecha"
                                value={factura.fecha}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <div className="button-group">
                            <button type="submit" className="register-btn">Registrar</button>
                            <button 
                                type="button" 
                                className="cancel-btn" 
                                onClick={() => setFactura({
                                    numero: '',
                                    monto: '',
                                    categoria: '',
                                    fecha: ''
                                })}
                            >
                                Cancelar
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default FacturaPro;

