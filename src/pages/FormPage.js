import React from 'react'
import Form from '../layouts/Form'

const FormPage = () => {


    
  return (
    <>
      <Form
        txt={"Formulario Registro"}
        tbtn={"Enviar"}
        classDiv={"divForm "}
        divMayor={"divMayor"}
        ruta={"/login"}
        txtruta={"Para loguearse aquí..."}
        txtuser={"registrado"}
        TF={true}
      />
    </>
  );
}

export default FormPage