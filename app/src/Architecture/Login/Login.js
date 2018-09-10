import React, { Component } from 'react';
import logo from './LogoGrande.png';
import './Login.css';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <header className="Login-header">
          <img src={logo} className="Login-logo" alt="logo" />
          <h1 className="Login-title">Inicia Sesion</h1>
        </header>
            <div>
              <input type="text" required placeholder="  Usuario"/>
            </div>
            <div>
              <input type="password" required placeholder="  password"/>
            </div>
            <div>
              <a class="boton_personalizado" >Iniciar Sesion</a>
            </div>
            <div>
              <p class="Login-crearCuenta">o crea tu cuenta<a href=""> aqui </a>!!</p>
            </div>
    </div>


    );
  }
}

export default Login;
