import React from "react";
import "../Stylesheets/PagesPrincipal.css";
import { Link } from "react-router-dom";


function PagesPrincipal() {
  return (
    <div className="Container-Principal">
      <div className="Wel-Prin">
        <h1>¡ Bienvenid@ a </h1>
        <h1>Mi portafolio Personal ! </h1>
      </div>
      <div className="info-Prin">
        <p>
          Soy una desarrolladora web que me gusta crear paginas inovadoras,
          escalables y mantenibles.
        </p>
      </div>
      <div className="btn-Prin">
      <Link to="/Welcome" aria-label="Visualiza mi portafolio">
          <span>Visualiza mi portafolio</span>
          <i></i>
        </Link>
      </div>
    </div>
  );
}

export default PagesPrincipal;
