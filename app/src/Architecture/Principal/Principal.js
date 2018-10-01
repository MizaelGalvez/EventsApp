import React, { Component } from 'react';
import {connect} from 'react-redux';

import './Principal.css';
import QRimagen from './QR.png';

import Navegacion from '../Navegacion/Navegacion';
let Nav = Navegacion;

class Principal extends Component {

  ActualizarDato = (event) => {
    this.props.dispatch({
      type: 'Extender_Data',
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
      <input className='BotonEscanear' type="file"  accept="image/*" capture="camera"></input>
      </div>
      <h3 className='h3'>Registros Asistentes : <p className='Cantidades'>358</p></h3>
      <h2 className='BottonDatos' onClick={this.ActualizarDato} >Consultar Datos</h2>
      <div></div>
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

export default connect(mapStatetoProps)(Principal);
