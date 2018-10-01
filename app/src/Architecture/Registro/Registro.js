import React, { Component } from 'react';
import {connect} from 'react-redux';
import firebase from "firebase";

import logo from './LogoGrande.png';
import './Registro.css';

class Registro extends Component {

  constructor(props) {
    super(props);
    this.state = {email: '',
                  pass: '',
                  Repetirpass: ''
                  };

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePass = this.handleChangePass.bind(this);
  }


  handleChangeEmail = (event) => this.setState({email: event.target.value })
  handleChangePass = (event) => this.setState({pass: event.target.value })
  handleChangeRepetirPass = (event) => this.setState({Repetirpass: event.target.value })



  RealizarRegistro = (event) => {


    var email = this.state.email;
    var password = this.state.pass;
    var confirmarPassword = this.state.Repetirpass;

    if (password !== "" && password === confirmarPassword) {

      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      //  var errorCode = error.code;
      //var errorMessage = error.message;
      // ...
      })

      alert('Registro Realizado Satisfactoriamente');

      this.props.dispatch({
        type: 'Usuario_Login',
        UserValidation:'login',
      })

    }else {
      alert('Contraseñas no Coinciden');
    }



  }


  render() {
    return (
      <div className="Registro">
        <div className="contenedorRegistro">
            <header className="Registro-header">
              <img src={logo} className="Registro-logo" alt="logo" />
              <h1 className="Registro-title">Registrate</h1>
            </header>

            <div>
              <input type="text" value={this.state.email} onChange={this.handleChangeEmail} required placeholder="  Email" />
            </div>

            <div>
              <input type="password" value={this.state.pass} onChange={this.handleChangePass} required placeholder="  Contraseña" />
            </div>

            <div>
              <input type="password" value={this.state.Repetirpass} onChange={this.handleChangeRepetirPass} required placeholder=" Confirmar Contraseña" />
            </div>

            <div>
              <input className='BotonRegistro' type="file"  accept="image/*" capture="camera"></input>
            </div>

            <div>
              <a className="boton_personalizado" onClick={this.RealizarRegistro}>Registrarse</a>
            </div>
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

export default connect(mapStatetoProps)(Registro);
