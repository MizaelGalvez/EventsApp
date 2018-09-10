import React, { Component } from 'react';
import './App.css';
import Inicio from './Inicio/Inicio';
import Login from './Login/Login';
let Contenido = Inicio;


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
        Usuario: null
    }
    setTimeout(
    function() {
        Contenido = Login
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




  render() {
    return (
      <div className="root">
          {<Contenido/>}
      </div>
    );
  }
}

export default App;
