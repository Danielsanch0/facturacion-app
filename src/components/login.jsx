import './login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <img
          src="src/img/Login (1).png"
          alt="Factura Icon"
          className="icon"
        />
       
        <form>
          <input
            type="email"
            placeholder="Correo Electrónico"
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
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