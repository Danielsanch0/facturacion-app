import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  

  const handleSubmit = (e) => {
    e.preventDefault();


    const validEmail = 'facturapro@gmail.com';
    const validPassword = 'factura123';

    
    if (email === validEmail && password === validPassword) {
      alert('¡Has iniciado sesión correctamente!');
     
      navigate('/facturapro');

    
      setEmail('');
      setPassword('');
    } else {
      alert('Correo o contraseña no válidos');

      setEmail('');
      setPassword('');
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
