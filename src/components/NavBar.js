import React from "react";
import { Link } from "react-router-dom";
import "./components.css"

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="divBig">
          <Link to="/">
            <button className="navButton1">Home</button>
          </Link>
          <div className="divNav">
            <a href="/form">Registro</a>
            <a href="/login">Logueo</a>
            <a href="/dos">2º Página</a>
          </div>
                    <Link to="/#">
          <button className="navButton2">
           Logout
          </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
