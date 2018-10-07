import React, { Component } from 'react';
import {connect} from 'react-redux';
import firebase from "firebase";
import Navegacion from '../Navegacion/Navegacion';

import './Datos.css';


let Nav = Navegacion;

class Datos extends Component {

  constructor(props){
    var userId = firebase.auth().currentUser.uid;

    var cont = 1;
    var App = 'EnCo';

      super(props)
      this.state = {
        App: 'EnCo',
        QRExpositor: '',
        delay: 100,
        result: '',
        registros: '',
      }
      setTimeout(
      function() {
        return firebase.database().ref(App + '/Expositores/' + userId + '/').once('value').then(function(snapshot) {
          cont = (snapshot.val().Contador) || 0;
        })

      },
      0);
      setTimeout(
      function() {
          this.setState({registros: cont});
      }
      .bind(this),
      1000);

    }

  BotonRegresar = (event) => {

    this.props.dispatch({
      type: 'Usuario_Accion',
      UserValidation:'active',
    })

  }

  BotonDescargar = (event) => {

    alert('Pronto estara Listo')

  }


  render() {
    var numero = this.state.registros;
    return (

      <div className='root'>
      {<Nav/>}
          <div className='Data'>

              <div className='Asistentes'>
              </div>

              <div className="Tienes"><p>Tienes</p></div>
              <div className="TienesNum"><p>{numero}</p></div>
              <div className="TextRegistros"><p>Registros</p></div>



              <div className='Botones-datos'>
                <a className="Data-button" onClick={this.BotonRegresar}>Regresar</a>
                <a className="Data-button" onClick={this.BotonDescargar}>Descargar</a>
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

export default connect(mapStatetoProps)(Datos);
