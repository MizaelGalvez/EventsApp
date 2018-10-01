import React, { Component } from 'react';
import {connect} from 'react-redux';
import Navegacion from '../Navegacion/Navegacion';

import './Datos.css';


let Nav = Navegacion;

class Datos extends Component {

  BotonRegresar = (event) => {

    this.props.dispatch({
      type: 'Usuario_Registro',
      UserValidation:'active',
    })

  }

  BotonDescargar = (event) => {

    alert('Pronto estara Listo')

  }


  render() {
    return (
      <div className='root'>
      {<Nav/>}
          <div className='Data'>

              <div className='Asistentes'>
              </div>


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
