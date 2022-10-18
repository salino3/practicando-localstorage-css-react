import React, { useEffect, useState } from 'react'

const SecondPage = () => {

    const [first, setFirst] = useState('');
    const [second, setSecond] = useState('');
    const [third, setThird] = useState('');

      const obtenerLocalStorage = () => {
        if (localStorage.getItem("info")) {
          // llamando la key del localStorage
          let info = localStorage.getItem("info");
          setFirst(info);
          //  let persona = JSON.parse(localStorage.getItem("persona"));
        } else {
          console.log("No hay entradas en el localStorage");
        }
      };

//
        useEffect(() => {
          if (localStorage.getItem("info")) {
            // llamando la key del localStorage
            setSecond(localStorage.getItem("info"));
            //  let persona = JSON.parse(localStorage.getItem("persona"));
          } else {
            console.log("No hay entradas en el localStorage");
          }
        }, []);

   const handleSubmit = (event) => {
     event.preventDefault();
let mivalor = event.target.myinput.value;

if (mivalor === localStorage.getItem("info")) {
     obtenerLocalStorage();
       setThird(mivalor);
}
 document.getElementById("myForm").reset();
   };

  return (
    <>
      <div className="divSecondPage">
        <h2>~ Hola desde Página 2~</h2>
        <button onClick={obtenerLocalStorage}>call info</button>
        {/* creo con useContext se quede la info en el DOM */}
        <p>clicando con getItem, second -&gt; {first} </p>
        <hr style={{ width: "65%" }} />
        {/* <p> con props &gt; {variable} </p> */}
        <p> Desde useEffect, useState second -&gt; {second} </p>
        <hr style={{ width: "65%" }} />
        <form id="myForm" onSubmit={handleSubmit}>
          <input
            type="text"
            name="myinput"
            placeholder="Inserir valor Local Storage de Página 1"
          />
          &nbsp;{"  "}
          <button type="submit">Click here</button>
        </form>
        <p>Si el valor del input y Local Storage coinciden -&gt; ~ {third} ~</p>
      </div>
      <div className="divAbajo"></div>
    </>
  );
}

export default SecondPage