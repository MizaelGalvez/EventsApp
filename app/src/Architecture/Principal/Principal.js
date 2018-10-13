import React, { Component } from 'react';
import {connect} from 'react-redux';
import QrReader from 'react-qr-reader';
import firebase from "firebase";
import swal from 'sweetalert';

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

<<<<<<< HEAD
            if (result.substring(0,4) === 'Enco' || result.substring(0,4) === 'Expo') {
              var userId = firebase.auth().currentUser.uid;
              var email = firebase.auth().currentUser.email;
              var cont = 1;
              this.setState({ result: "ID " + result + " Registrado" })
              setTimeout(
              function() {
                  this.setState({result: "",
                                Interes: "",});
              }
              .bind(this),
              2000);

              var interes = this.state.Interes;
              var App = this.state.App;

                return firebase.database().ref(App + '/Expositores/' + userId + '/').once('value').then(function(snapshot) {
                  cont = (snapshot.val().Contador) || 0;
                  cont = cont + 1;

                  firebase.database().ref(App + '/Expositores/' + userId + '/Registrados').push({
                    Registro: result,
                    Interes: interes,
                  });
                  firebase.database().ref(App + '/Expositores/' + userId ).update({
                    Contador: cont,
                    Email: email,
                  });
                  swal({
                      title: "ID Registrado",
                      text:  "ID "+ result,
                      icon: "success",
                      button: "Siguiente",
                    });
                });



            }else {
              //alert("El QR no corrresponde al Evento, Enviar al Registro.  QR escaneado = "+ result);
              swal({
                  title: "QR Erroneo",
                  text: "El QR no corrresponde al Evento, Enviar al Registro.  QR escaneado = "+ result,
                  icon: "error",
                  button: "Siguiente",
                });
            }



      }else {

        this.setState({ ErRor: " Escanear Nuevamente imagen borrosa o brillante" })
=======
        var userId = firebase.auth().currentUser.uid;
        var qr = '';
        var cont = 1;
        this.setState({ result: result + " Registrado" })
>>>>>>> parent of 65a9d16... Testeo antes del Evento
        setTimeout(
        function() {
            this.setState({result: "" });
        }
        .bind(this),
<<<<<<< HEAD
        4000);
        swal({
            title: "Muy Borroso o Brillante",
            text:  "Escanear Nuevamente ",
            icon: "warning",
            button: "Reintentar",
          });
=======
        2000);


        var App = this.state.App;

          return firebase.database().ref(App + '/Expositores/' + userId + '/').once('value').then(function(snapshot) {
            qr = (snapshot.val().QRExpositor) || 'SinEscaneo';
            cont = (snapshot.val().Contador) || 0;
            cont = cont + 1;

            firebase.database().ref(App + '/Expositores/' + userId + '/Registrados').push({
              Registro: result,
            });
            firebase.database().ref(App + '/Expositores/' + userId ).update({
              Contador: cont,
            });

          });


>>>>>>> parent of 65a9d16... Testeo antes del Evento
      }
    }



    handleError(err){
      console.error(err)
    }
    openImageDialog() {
      this.refs.qrReader1.openImageDialog()
      //<input className='BotonEscanear' type="file" onClick={this.openImageDialog} />
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

      <p className='AnuncioRegistrado'>{this.state.result} </p>
      <a className="boton_personalizado_escanear" onClick={this.openImageDialog}>Escanear</a>
      
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
