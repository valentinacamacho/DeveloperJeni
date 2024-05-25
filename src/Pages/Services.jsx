import React from "react";
import "../Stylesheets/Services.css"
import { CgIfDesign } from "react-icons/cg";


function Services() {
  return (

    <div className="container">
      <h1>Mis servicios</h1>

      <div class="boxesContainer">
        <div class="cardBox">
          <div class="card">
            <div class="front">
              <div className="icon-container">
              <CgIfDesign className="icon-services" />
              </div>
            </div>
            <div class="back">
              <h3>Analizando y diseñando</h3>
              <p>Tomo los proyectos de manera seria donde analizo cada uno de los elementos a planificar y diseñar.</p>

            </div>
          </div>
        </div>

        <div class="cardBox">
          <div class="card">
            <div class="front">
            <div className="icon-container">
              <CgIfDesign className="icon-services" />
              </div>
            </div>
            <div class="back">
              <h3>Implementación</h3>
              <p>Implemento una solucion web con buenas practicas, dependiendo la tecnologia a utilizar e implementar.</p>
            </div>
          </div>
        </div>

        <div class="cardBox">
          <div class="card">
            <div class="front">
            <div className="icon-container">
              <CgIfDesign className="icon-services" />
              </div>
            </div>
            <div class="back">
              <h3>Desarrollo Web Responsivo</h3>
              <p>Los diseños son responsivos, donde el usuario podra ingresar desde cualquier dispositivo.</p>
            </div>
          </div>
        </div>

        <div class="cardBox">
          <div class="card">
            <div class="front">
            <div className="icon-container">
              <CgIfDesign className="icon-services" />
              </div>
            </div>
            <div class="back">
              <h3>Soluciones Digitales Personalizadas</h3>
              <p>Brindo soluciones en medios digitales, ofrezco a los clientes proyectos personalizados exclusivamente para su negocio</p>
            </div>
          </div>
        </div>

      </div>

    </div>

  );
}

export default Services;