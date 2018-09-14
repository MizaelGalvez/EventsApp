import React, { Component } from 'react';
import {connect} from 'react-redux';

import logo from './LogoGrande.png';
import './Login.css';

class Login extends Component {

  ActualizarDato = (event) => {
    this.props.dispatch({
      type: 'Usuario_Login',
      UserValidation:'active',
    })

  }

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
          <a className="boton_personalizado" onClick={this.ActualizarDato}>Iniciar Sesion</a>
        </div>

        <div>
          <p className="Login-crearCuenta">o crea tu cuenta<a href="" > aqui </a>!!</p>
        </div>
      </div>
    );
  }
}

function mapStatetoProps(state, props){
  return {
    //enviar datos de App.js a esta Vista, si es que son necesarios
  }
}

export default connect(mapStatetoProps)(Login);
