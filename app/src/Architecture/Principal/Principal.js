import React, { Component } from 'react';
import './Principal.css';
import QRimagen from './QR.png';

class Principal extends Component {


  render() {
    return (
      <div className='Principal'>
      <img src={QRimagen} className="QRimagen" alt="MizaelDevs" />
      <input className='BotonEscanear' type="file" value="" accept="image/*" capture="camera" label="Escanear"></input>
      <h3 className='h3'>Registros Asistentes : <p className='Cantidades'>358</p></h3>
      <h2 className='BottonDatos'>Consultar Datos</h2>
      <div></div>
      </div>
    );
  }
}

export default Principal;
