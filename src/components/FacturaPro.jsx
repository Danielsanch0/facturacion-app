import React, { useState } from 'react';
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
        // Aquí podrías agregar funcionalidad para guardar la factura
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
                        <li>Registro de Facturas</li>
                        <li>Control de Gastos</li>
                        <li>Reportes Financieros</li>
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
                            <button type="button" className="cancel-btn" onClick={() => setFactura({
                                numero: '',
                                monto: '',
                                categoria: '',
                                fecha: ''
                            })}>Cancelar</button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default FacturaPro;
