import React, { Component } from 'react';
import {connect} from 'react-redux';
import firebase from "firebase";
import QrReader from 'react-qr-reader';

import logo from './LogoGrande.png';
import './Registro.css';

class Registro extends Component {

  constructor(props) {
    super(props);
    this.state = {email: '',
                  pass: '',
                  Repetirpass: '',
                  delay: 100,
                  result: '',
                  };

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePass = this.handleChangePass.bind(this);
    this.handleScan = this.handleScan.bind(this)
    this.openImageDialog = this.openImageDialog.bind(this)
  }


  handleChangeEmail = (event) => this.setState({email: event.target.value })
  handleChangePass = (event) => this.setState({pass: event.target.value })
  handleChangeRepetirPass = (event) => this.setState({Repetirpass: event.target.value })



  RealizarRegistro = (event) => {


    var email = this.state.email;
    var password = this.state.pass;
    var confirmarPassword = this.state.Repetirpass;

    if (this.state.result !== "") {
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
          UserID:this.state.result,
        })

        this.props.dispatch({
          type: 'Usuario_Login',
          UserValidation:'login',
        })

      }else {
        alert('Contraseñas no Coinciden');
      }
    }else {
      alert('Es requerido el escanear el QR');
    }



  }


  handleScan(result){
    if(result){
      this.setState({ result })
    }
  }
  handleError(err){
    console.error(err)
  }
  openImageDialog() {
    this.refs.qrReader1.openImageDialog()
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
              <input className='BotonRegistro' type="file"  accept="image/*" capture="camera" onClick={this.openImageDialog}></input>
              <p>{this.state.result}</p>
            </div>

            <div>
              <a className="boton_personalizado" onClick={this.RealizarRegistro}>Registrarse</a>
            </div>
        </div>
        <QrReader
          className="qrimage"
          ref="qrReader1"
          delay={this.state.delay}
          onError={this.handleError}
          onScan={this.handleScan}
          legacyMode
        />
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
