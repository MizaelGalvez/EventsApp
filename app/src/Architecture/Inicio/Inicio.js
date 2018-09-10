import React, { Component } from 'react';
import logo from './LogoGrande.png';
import './Inicio.css';

class Inicio extends Component {
  render() {
    return (
      <div className="inicio">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Bienvenidos</h1>
      </div>
    );
  }
}

export default Inicio;
