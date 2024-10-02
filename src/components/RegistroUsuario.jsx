import { useState } from 'react';
import './RegistroUsuario.css';

const RegistroUsuario = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para manejar el registro del usuario
    setAlertMessage('¡Registro exitoso!'); // Mensaje de éxito
    setShowAlert(true);
    // Reiniciar campos
    setNombre('');
    setEmail('');
    setPassword('');
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img
          src="src/img/LoginPro.jpeg"
          alt="Factura Icon"
          className="icon"
        />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Correo Electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Registrar</button>
        </form>
      </div>
      {showAlert && (
        <div className="alert-box">
          <p>{alertMessage}</p>
          <button onClick={closeAlert}>Cerrar</button>
        </div>
      )}
    </div>
  );
};

export default RegistroUsuario;
