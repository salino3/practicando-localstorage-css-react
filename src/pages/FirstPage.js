import React, { useEffect, useState } from 'react'

const FirstPage = ({  props }) => {
  //
  const [first, setFirst] = useState("");
const [second, setSecond] = useState("");

//
  const obtenerLocalStorage = () => {

    if (localStorage.getItem("info")) {
      // llamando la key del localStorage
      let info = localStorage.getItem("info");
      setSecond(info);

    } else {
      console.log("No hay entradas en el localStorage");
    }
  };

  useEffect(() => {

    if (localStorage.getItem("info")) {
      // llamando la key del localStorage
      setFirst(localStorage.getItem("info"));
    }
    else {
      console.log("No hay entradas en el localStorage");
    }
  }, [props]);

  return (
    <>
    <div className='divFirstPage'>
    <br/>
      <h2>~ Hola desde Página 1 ~</h2>
      <button onClick={obtenerLocalStorage}>Call info</button>
      {/*  */}
      <p>clicando con getItem, useState second -&gt; {second} </p>
      <hr style={{ width: "30em" }} />
      {/*  */}
      <p> con props desde App, useState first -&gt; {first} </p>
  </div>
    </>
  );
};

export default FirstPage