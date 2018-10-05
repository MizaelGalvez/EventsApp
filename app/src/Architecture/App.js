import React, { Component } from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import firebase from "firebase";

import './App.css';

import Inicio from './Inicio/Inicio';
import Login from './Login/Login';
import Registro from './Registro/Registro';
import Principal from './Principal/Principal';
import Datos from './Datos/Datos';
import reducer from './Reducers/AccionesAPP'

let Contenido = Inicio;

const initialState = {
  UserValidation:'null',
  View:'Home',
  qr:'',
}
const store = createStore(
  reducer,
  initialState,
)
var config = {
    apiKey: "AIzaSyDsymr6GkvB8t_M4fCDGL2bizcD0IRx2tU",
    authDomain: "dbs-de-proyectos.firebaseapp.com",
    databaseURL: "https://dbs-de-proyectos.firebaseio.com",
    projectId: "dbs-de-proyectos",
    storageBucket: "dbs-de-proyectos.appspot.com",
    messagingSenderId: "471214404221"
}

firebase.initializeApp(config);


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

  Actualizar(Accion){

    console.log(Accion);

    switch (Accion) {
      case 'active':

          this.ContenidoPrincipal()

        break;

      case 'data':

          this.ContenidoDatos()

        break;

      case 'register':

          this.ContenidoRegistro()

        break;

      case 'login':

          this.ContenidoLogin()

        break;

      case 'home':

          this.ContenidoInicio()

        break;

      default:

    }


  }




  ContenidoInicio = (event) => {
      Contenido = Inicio;
      this.setState({ventana: 'Inicio'});
  }
  ContenidoLogin = (event) => {
      Contenido = Login;
      this.setState({ventana: 'Login'});
  }
  ContenidoRegistro = (event) => {
      Contenido = Registro;
      this.setState({ventana: 'registro'});
  }
  ContenidoPrincipal = (event) => {
      Contenido = Principal;
      this.setState({ventana: 'Principal'});
  }
  ContenidoDatos = (event) => {
     Contenido = Datos;
     this.setState({ventana: 'Datos'});
  }



  render() {

    store.subscribe( () => {

      var datos = store.getState()
      let Accion = datos[0].UserValidation;
      this.Actualizar(Accion)

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
