import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
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
    <>
      <h1>Inicio sesion</h1>
      <form>
        <input value={username} onChange={ (e) => setUsername(e.target.value) } placeholder='Nombre de usuario' type='text'></input>
        <input value={password} onChange={ (e) => setPassword(e.target.value) } placeholder='password' type='password'></input>
        <button onClick={ (e)=> handleLogin(e) }>Iniciar sesión</button>
      </form>

      <a href="#" onClick={(e)=>e.preventDefault()}>No tengo una cuenta</a>
    </>
  );
}

export default App
