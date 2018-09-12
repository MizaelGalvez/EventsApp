import React, { Component } from 'react';
import './App.css';
import Inicio from './Inicio/Inicio';
import Login from './Login/Login';
import Principal from './Principal/Principal';
let Contenido = Inicio;


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
        Usuario: null
    }
    setTimeout(
    function() {
        Contenido = Principal
        this.setState({Usuario: 1});
    }
    .bind(this),
    4000);
  }

  ContenidoInicio = (event) => {
      Contenido = Inicio;
  }
  ContenidoLogin = (event) => {
      Contenido = Login;
  }
  ContenidoPrincipal = (event) => {
      Contenido = Principal;
  }




  render() {
    return (
      <div className="root">
          {<Contenido/>}
      </div>
    );
  }
}

export default App;
