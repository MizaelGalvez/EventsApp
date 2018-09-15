import React, { Component } from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import './App.css';

import Inicio from './Inicio/Inicio';
import Login from './Login/Login';
import Principal from './Principal/Principal';
import Camara from './Camara/Camara';
import reducer from './Reducers/AccionesAPP'

let Contenido = Inicio;

const initialState = {
  UserValidation:'null',
}
const store = createStore(
  reducer,
  initialState,
)


class App extends Component {


  constructor(props) {
    super(props)
    this.state = {
        Usuario: null
    }
    setTimeout(
    function() {
        Contenido = Login
        this.setState({Usuario: '1'});
    }
    .bind(this),
    4000);
  }

  Actualizar(){
    console.log('logica de Muestra');
    this.ContenidoPrincipal()
  }



  ContenidoInicio = (event) => {
      Contenido = Inicio;
  }
  ContenidoLogin = (event) => {
      Contenido = Login;
  }
  ContenidoPrincipal = (event) => {
      Contenido = Principal;
      this.setState({Usuario: 'activo'});
  }
  ContenidoCamara = (event) => {
     Contenido = Camara;
  }



  render() {

    store.subscribe( () => {
      this.Actualizar()
    });

    return (
      <Provider store={store}>
        <div className="root">
            {<Contenido/>}
        </div>
      </Provider>
    );

  }
}


export default App;
