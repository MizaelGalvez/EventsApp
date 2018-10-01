function AccionesAPP(state, action){
  switch (action.type) {

    case 'Usuario_Logout':

      //codigo a realizar por cada acion recibida

      return[{UserValidation: action.UserValidation}];

    case 'Usuario_Login':

      //codigo a realizar por cada acion recibida

      return[{UserValidation: action.UserValidation}];

    case 'Usuario_Registro':

      //codigo a realizar por cada acion recibida

      return[{UserValidation: action.UserValidation}];

    case 'Extender_Data':

      //codigo a realizar por cada acion recibida

      return[{UserValidation: action.UserValidation}];

    default:
      return state

  }
}

export default AccionesAPP;
