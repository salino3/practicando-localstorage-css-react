import React from 'react';
import Form from '../layouts/Form';

const LoginFormPage = () => {

  return (
    <>
      <Form
        txt={"Formulario Login"}
        tbtn={"Login"}
        classDiv={"divForm "}
        divMayor={"divMayor"}
        ruta={"/form"}
        txtruta={"Para registrarse aquí..."}
        txtuser={"logueado"}
        TF={false}
      />
    </>
  );
}

export default LoginFormPage