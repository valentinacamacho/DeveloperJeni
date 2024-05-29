import React from "react";
import "../Stylesheets/About.css";
import Documento from "../assets/Document/CV-Jenifer-Valentina-Camacho-Abril.pdf";
import Avatar from "../assets/Images/Avatar.png";

function Aboutme() {
  return (
    <div className="contenedor">
      <div className='titulo-2'>
        <h1>Aboutme </h1>
      </div>
      <div className="rectangulo">
        <div className="contenido">
          <div className="avatar-general">
            <img src={Avatar} alt="Avatar Jenifer" className="avatar" />
          </div>
          <div className="texto">
            <p>Hola! Soy Jenifer Camacho. Soy analista y desarrolladora web, soy una mujer dedicada, apasionada e innovadora.</p>
            <p>Aspiro ampliar mis conocimientos y habilidades dentro de una entidad que me brinde la oportunidad de desarrollar mis habilidades de manera amplia y al mismo tiempo contribuir al crecimiento competitivo de la empresa.</p>
            <div className="btn-Aboutme">
              <a href={Documento} target="_blank" rel="noopener noreferrer">
                <button><span>Visualiza mi CV</span></button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
