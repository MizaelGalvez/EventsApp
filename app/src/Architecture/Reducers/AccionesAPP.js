function AccionesAPP(state, action){
  switch (action.type) {

    case 'Usuario_Accion':



      return[{UserValidation: action.UserValidation, QRexpositor:action.UserID}];

    default:

  }
}

export default AccionesAPP;
