import React, { Component } from 'react';
import {connect} from 'react-redux';
import QrReader from 'react-qr-reader';
import firebase from "firebase";

import './Principal.css';
import QRimagen from './QR.png';

import Navegacion from '../Navegacion/Navegacion';
let Nav = Navegacion;
class Principal extends Component {

  constructor(props){
      super(props)
      this.state = {
        App: 'EnCo',
        QRExpositor: '',
        delay: 100,
        result: '',
        registros: 0,
      }


      this.handleScan = this.handleScan.bind(this)
      this.openImageDialog = this.openImageDialog.bind(this)
    }
    handleScan(result){
      if(result){
        var registros = this.state.registros + 1;


        var App = this.state.App;

        var userId = firebase.auth().currentUser.uid;
          return firebase.database().ref(App + '/Expositores/' + userId + '/').once('value').then(function(snapshot) {
          var qr = (snapshot.val().QRExpositor) || 'SinEscaneo';
          var cont = (snapshot.val().Contador) || 0;


          firebase.database().ref(App + '/Expositores/' + userId + '/Registrados').push({
            Registro: result,
          });
          cont = cont + 1;
          firebase.database().ref(App + '/Expositores/' + userId ).update({

            Contador: cont,
          });

          registros = cont;


        });

        this.setState({ result, registros })

      }

    }
    handleError(err){
      console.error(err)
    }
    openImageDialog() {
      this.refs.qrReader1.openImageDialog()
    }

  ActualizarDato = (event) => {
    this.props.dispatch({
      type: 'Usuario_Accion',
      UserValidation:'data',
    })
  }




  render() {
    return (
      <div className='root'>
      {<Nav/>}
      <div className='Principal'>
      <img src={QRimagen} className="QRimagen" alt="MizaelDevs" />
      <div className="div_boton">
      <p className='Cantidades'>{this.state.result}</p>
      <input className='BotonEscanear' type="file" onClick={this.openImageDialog} />
      </div>
      <div>

      </div>
      <h3 className='h3'>Registros Asistentes : <p className='Cantidades'>{this.state.registros}</p></h3>
      <h2 className='BottonDatos' onClick={this.ActualizarDato} >Consultar Datos</h2>
      <div></div>
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


export default connect()(Principal);
