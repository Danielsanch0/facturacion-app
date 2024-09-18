import { useState } from 'react';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Correo y contraseña fijos
    const validEmail = 'facturapro@gmail.com';
    const validPassword = 'factura123';

    // Verifica si el correo y la contraseña son correctos
    if (email === validEmail && password === validPassword) {
      alert('¡Haz iniciado sesión correctamente!');
      // Resetear los campos de inicio de sesión
      setEmail('');
      setPassword('');
    } else {
      alert('Correo o contraseña no válidos');
    }
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
          <a href="#">¿Olvidaste tu contraseña?</a>
          <button type="submit">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
