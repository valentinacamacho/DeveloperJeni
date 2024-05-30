import React from "react";
import "../Stylesheets/Services.css"
import ServiceCard from "../Components/ServiceCard";
import { MdAnalytics } from "react-icons/md";
import { DiYeoman } from "react-icons/di";
import { MdRocketLaunch } from "react-icons/md";
import { GiShamrock } from "react-icons/gi";

function Services() {
  return (

    <div className="container">
      <div className='titulo'>
        <h1>Mis servicios</h1>
      </div>
      <ServiceCard
        iconservices={MdAnalytics}
        titlecard={"Análisis y diseño"}
        descripcioncard={"Tomo los proyectos de manera seria, analizando cada uno de los elementos para planificar y diseñar adecuadamente."} />

      <ServiceCard
        iconservices={DiYeoman}
        titlecard={"Planificación"}
        descripcioncard={"La planificación organiza tareas dentro del tiempo y presupuesto, los requisitos aseguran la satisfacción del cliente."} />

      <ServiceCard
        iconservices={MdRocketLaunch}
        titlecard={"Responsive Design"}
        descripcioncard={"Los diseños son responsivos,lo que permite al usuario acceder desde cualquier dispositivo."} />

      <ServiceCard
        iconservices={GiShamrock}
        titlecard={"Servicios personalizados"}
        descripcioncard={"Ofrezco soluciones digitales personalizadas para satisfacer las necesidades específicas de cada cliente."} />
    </div>
  );
}

export default Services;