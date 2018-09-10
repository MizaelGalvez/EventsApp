import React, { Component } from 'react';
import logo from './LogoGrande.png';
import './Login.css';



class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
        Usuario: null,
        bool: 1,
        color: 'purple',
    }
  }

  CambiarColorStyles = (event) => {
    if (this.state.bool == 1) {
      this.setState({color: 'blue', bool: 0});

    }else {
      this.setState({color: 'purple', bool: 1});
    }
  }

  render() {

    const Styles = {
    color: this.state.color,
    };

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
          <a class="boton_personalizado" onClick={this.CambiarColorStyles} >Iniciar Sesion</a>
        </div>

        <div>
          <p class="Login-crearCuenta">o crea tu cuenta<a href="" style={Styles}> aqui </a>!!</p>
        </div>

    </div>

    );
  }
}

export default Login;
