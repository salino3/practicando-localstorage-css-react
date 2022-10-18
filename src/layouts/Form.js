import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Form = ({ txt, tbtn, divMayor, classDiv, ruta, txtruta, txtuser, TF }) => {
  const [first, setFirst] = useState({
    name: "",
    email: "",
    password: ""
  });
  //

  const handleSubmit = (event) => {
    event.preventDefault();

    let myname = event.target.Name.value;
    let myemail = event.target.Email.value;
    let mypsw = event.target.Psw.value;
    let user = {
     myname ,
     myemail ,
     mypsw 
    }
    console.log(`datos usuario: ${myname}  ${myemail}`);
//*
const ingresoCorrecto = () => {
   localStorage.setItem(`${user.mypsw}`, JSON.stringify(user)); 
  alert(`Usuario ${myname} ${txtuser}!`);
};
let booleano = TF;
//
 if (
   (localStorage.getItem(`${user.mypsw}`) &&
   localStorage.getItem(`${user.mypsw}`) === user.mypsw)
 ) {
   booleano
     ? alert(
         `Usuario ${myname} lo sentimos estos datos ya están utilizados por otro usuario!`
       )
     : alert(`Usuario ${myname} lo sentimos datos incorrectos`);
 } else if (
   localStorage.getItem(`${user.mypsw}`) ||
   localStorage.getItem(`${user.mypsw}`) === user
 ) {
   booleano
     ? alert(` ${myname} lo sentimos datos ya utilizados por otro usuario!`)
     : alert(`Usuario ${myname} ${txtuser}!`);
 } else {
   booleano ? ingresoCorrecto() : alert(`Datos incorrectos!`);
 }
 //
document.getElementById("myForm").reset();

  }; 
 
const handleChange = (event) => {
  event.preventDefault();
//  console.log(event.target.value);
  setFirst(event.target.value);
}


  return (
    <>
      <div className={divMayor}>
        <div className={classDiv}>
          <h3>{txt}</h3>
          <form id="myForm" onSubmit={handleSubmit}>
            <input
              type="text"
              name="Name"
              placeholder="Escriba su nombre.."
              onChange={handleChange}
              value={first.name}
              required
            />
            <input
              type="email"
              name="Email"
              placeholder="Escriba su email.."
              onChange={handleChange}
              value={first.email}
              required
            />
            <input
              type="password"
              name="Psw"
              placeholder="Escriba su password.."
              onChange={handleChange}
              value={first.password}
              required
            />
            <button>
              <b>{tbtn}</b>
            </button>
          </form>
        </div>
        <br />
        <Link to={ruta}>
          {txtruta}
        </Link>
      </div>
    </>
  );
};

export default Form

