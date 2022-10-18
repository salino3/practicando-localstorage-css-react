import React, { useEffect, useState } from "react";
import FirstPage from "./FirstPage";

const PrincipalPage = () => {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");

  const handleChange = (event) => {
    event.preventDefault();

    setFirst(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let myInfo = event.target.valor.value;
    localStorage.setItem("info", myInfo);

    setSecond(myInfo);
    setFirst("");
    console.log(first);
  };
  //

  useEffect(() => {
    if (localStorage.getItem("info")) {
      // llamando la key del localStorage
      setThird(localStorage.getItem("info"));
      //  let persona = JSON.parse(localStorage.getItem("persona"));
    } else {
      console.log("No hay entradas en el localStorage");
    }
  }, [second]);

  //
  function cleanStorage() {
    // Clear localStorage items
    localStorage.clear();
  }

  return (
    <>
      <div className="divPrincipalPage">
        <h2>
          <b>~ Página principal ~</b>
        </h2>
        <p>~ escriba algo en el Local Storage ~</p>
        <form onSubmit={handleSubmit}>
          <input
            name="valor"
            type="text"
            placeholder="Escriba algo y presione ENVIAR "
            value={first}
            onChange={handleChange}
          />
        </form>
        <p> Desde onSubmit form, useState second -&gt; {second}</p>
        <form>
          <p>
            para limpiar storage y DOM{" "}
            <button onClick={cleanStorage}>Clean localStorage and DOM</button>{" "}
          </p>
        </form>
        <p>
          para limpiar solamente storage{" "}
          <button onClick={cleanStorage}>Clean localStorage</button>{" "}
        </p>
        <hr style={{ width: "30em" }} />
        <p> Desde useEffect, , useState third -&gt; {third}</p>
        <hr />
        <FirstPage props={second} />
      </div>
    </>
  );
};

export default PrincipalPage;
