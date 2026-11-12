import { useState } from 'react'
import {login} from './services/AuthServices';

function App() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e){
    e.preventDefault();
    console.log(username);
    console.log(password);
    setUsername("");
    setPassword("");
    login();
  }
  return (
    <main className="login">
      <div className="login-card">
        <h1>Iniciar sesión</h1>
        <p className="login-subtitle">Ingresa con tu usuario y contraseña</p>
        <form>
          <label>
            Usuario
            <input value={username} onChange={ (e) => setUsername(e.target.value) } placeholder='Nombre de usuario' type='text'></input>
          </label>
          <label>
            Contraseña
            <input value={password} onChange={ (e) => setPassword(e.target.value) } placeholder='Contraseña' type='password'></input>
          </label>
          <button onClick={ (e)=> handleLogin(e) }>Iniciar sesión</button>
        </form>
      </div>
    </main>
  );
}

export default App
