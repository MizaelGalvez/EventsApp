import React, { Component } from 'react';
import {connect} from 'react-redux';
import firebase from "firebase";

import logo from './LogoGrande.png';
import './Navegacion.css';



class Navegacion extends Component {

  CerrarSesion = (event) => {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    })

    this.props.dispatch({
      type: 'Usuario_Accion',
      UserValidation:'login',
    })

  }


  render() {
    var Email = firebase.auth().currentUser.email;
    return (
      <div className="Navegacion">
        <img src={logo} className="Navegacion-logo" alt="logo" />
        <p className="Email">{Email}</p>
        <a className="Navegacion-title" onClick={this.CerrarSesion}>Cerrar Sesion</a>
      </div>
    );
  }
}


function mapStatetoProps(state, props){
  return {
    //enviar datos de App.js a esta Vista, si es que son necesarios
  }
}

export default connect(mapStatetoProps) (Navegacion);
