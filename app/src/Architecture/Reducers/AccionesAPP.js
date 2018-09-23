function AccionesAPP(state, action){
  switch (action.type) {

    case 'Usuario_Login':

      //codigo a realizar por cada acion recibida

      return[...state,{UserValidation: action.UserValidation}]

    case 'Extender_Data':

      //codigo a realizar por cada acion recibida

      return[...state,{View: action.View}]

    default:
      return state

  }
}

export default AccionesAPP;
