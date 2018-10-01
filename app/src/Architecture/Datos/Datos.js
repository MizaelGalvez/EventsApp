import React, { Component } from 'react';
import {connect} from 'react-redux';
import Navegacion from '../Navegacion/Navegacion';

import './Datos.css';


let Nav = Navegacion;

class Datos extends Component {


  render() {
    return (
      <div className='root'>
      {<Nav/>}
          <div className='Data'>

              <div className='Asistentes'>
                <p className="asistente">Galvez Alcaraz Alejandro Mizael</p>
                <p className="asistente">Galvez Alcaraz Alejandro Mizael</p>
                <p className="asistente">Galvez Alcaraz Alejandro Mizael</p>
                <p className="asistente">Galvez Alcaraz Alejandro Mizael</p>
                <p className="asistente">Galvez Alcaraz Alejandro Mizael</p>
                <p className="asistente">Galvez Alcaraz Alejandro Mizael</p>
              </div>


              <div className='Botones-datos'>
                <a className="Data-button">Regresar</a>
                <a className="Data-button">Descargar</a>
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
