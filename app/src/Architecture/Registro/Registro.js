import React, { Component } from 'react';
import {connect} from 'react-redux';
import firebase from "firebase";
import QrReader from 'react-qr-reader';

import logo from './LogoGrande.png';
import './Registro.css';

class Registro extends Component {

  constructor(props) {
    super(props);
    this.state = {
                  App: 'EnCo',
                  email: '',
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

    var App = this.state.App;
    var email = this.state.email;
    var password = this.state.pass;
    var confirmarPassword = this.state.Repetirpass;
    var result = this.state.result;
    var ErrorCrear = false;

    if (this.state.result !== "") {
      if (password !== "" && password === confirmarPassword) {

        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        //  var errorCode = error.code;
        //var errorMessage = error.message;
        ErrorCrear = true;
        // ...
        alert('el error es : ' + error);
      }).then(function(){

        if (ErrorCrear == false) {

          firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;
            // ...
          } else {
            // User is signed out.
            // ...
          }

          if (uid) {

              firebase.database().ref(App + '/Expositores/' + uid + '/').set({
                QRExpositor: result,
                Contador: 0,
              });
              console.log(uid);
              console.log(result);

          }

          });



        }


      });

      this.enviarLogin();


      }else {
        alert('Contraseñas no Coinciden');
      }
    }else {
      alert('Es requerido el escanear el QR');
    }



 }

   enviarLogin(){

     this.props.dispatch({
       type: 'Usuario_Accion',
       UserValidation:'login',

     })

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
    //<input className='BotonRegistro' type="file" onClick={this.openImageDialog}></input>
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
              <a className="boton_personalizado_escanear" onClick={this.openImageDialog}>Escanear</a>

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
