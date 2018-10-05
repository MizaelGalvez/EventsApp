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
        registros: '',
      }


      this.handleScan = this.handleScan.bind(this)
      this.openImageDialog = this.openImageDialog.bind(this)
    }



    handleScan(result){
      if(result){

        var userId = firebase.auth().currentUser.uid;
        var qr = '';
        var cont = 1;
        this.setState({ result: result + " Registrado" })
        setTimeout(
        function() {
            this.setState({result: "" });
        }
        .bind(this),
        2000);


        var App = this.state.App;

          return firebase.database().ref(App + '/Expositores/' + userId + '/').once('value').then(function(snapshot) {
            qr = (snapshot.val().QRExpositor) || 'SinEscaneo';
            cont = (snapshot.val().Contador) || 0;
            cont = cont + 1;
            alert(cont);

            firebase.database().ref(App + '/Expositores/' + userId + '/Registrados').push({
              Registro: result,
            });
            firebase.database().ref(App + '/Expositores/' + userId ).update({
              Contador: cont,
            });

          });


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
      <p className='AnuncioRegistrado'>{this.state.result} </p>
      <input className='BotonEscanear' type="file" onClick={this.openImageDialog} />
      </div>
      <div>

      </div>
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
