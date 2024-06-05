import React, { useState } from 'react';
import "../Stylesheets/ProyectsCard.css"
import { FaFigma, FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { BiLogoBootstrap, BiLogoPhp } from "react-icons/bi";
import { TbSql } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import ProyectsCard from '../Components/ProyectsCard';
import Pro1 from "../assets/Images/SabujCha.png";
import Pro2 from "../assets/Images/Nicos.png";
import Pro3 from "../assets/Images/todolist.png";
import Pro4 from "../assets/Images/Miproyect.png";
import Pro5 from "../assets/Images/Corpohypatia.png";
import Pro6 from "../assets/Images/Hotelia.png";
import { type } from '@testing-library/user-event/dist/type';

function Proyects() {
  const [filter, setFilter] = useState('all');

  const allProjects = [
    {
      image: Pro4,
      title: "Mi portafolio",
      description: "Mi portafolio es una muestra personalizada de mis diseños. En este proyecto, quiero exhibir tanto mis habilidades como los proyectos que he realizado. Espero que disfruten explorando mi trabajo tanto como yo disfruté creándolo.",
      projectUrl: "https://developer-jeni-bj96.vercel.app/",
      githubUrl: "https://github.com/valentinacamacho/DeveloperJeni",
      methodologyIcons: [FaReact,FaHtml5, FaCss3Alt, BiLogoBootstrap],
      type: 'individual'
    },
    {
      image: Pro2,
      title: "Nik’os Cupcakes",
      description: "Nico's Cupcakes es una pagina de 'shopping cart' donde ofrece tortas, cupcakes y paletas personalizadas para ocasiones especiales, brindando momentos gratos llenos de sabores.",
      projectUrl: "https://nicos-cupcakes.vercel.app/",
      githubUrl: "https://github.com/valentinacamacho/nicoscupcakes",
      methodologyIcons: [FaFigma, FaReact, FaHtml5, FaCss3Alt, BiLogoBootstrap],
      type: 'individual'
    },
    {
      image: Pro5,
      title: "Corpohypatia",
      description:"La ONG se dedica apasionadamente a la defensa de los derechos humanos, trabajando incansablemente por la igualdad social y de género con un enfoque diferencial. Su misión prioritaria es llevar a cabo intervenciones significativas en beneficio de niños, niñas, adolescentes y mujeres, reconociendo y abordando las distintas realidades y desafíos que enfrentan estos grupos en la sociedad.",
      projectUrl: "https://corpohypatia.vercel.app/",
      githubUrl:"https://github.com/programateacademy/5-Corpohypatiapatia-Corpohypatia-Front-end",
      methodologyIcons:[FaReact, FaHtml5, FaCss3Alt, BiLogoBootstrap, IoLogoNodejs, SiMongodb],
      type:'group'
    },
    {
      image: Pro3,
      title: "To-Do-List",
      description: "To-Do-List es donde puedes agregar una lista de tareas o ideas, donde permite gestionar agregar y eliminar una lista.",
      projectUrl: "https://to-do-list-peach-sigma.vercel.app/",
      githubUrl: "https://github.com/valentinacamacho/To-do-list",
      methodologyIcons: [FaFigma, FaReact, FaHtml5, FaCss3Alt, SiMongodb, IoLogoNodejs],
      type: 'individual'
    },
    {
      image: Pro1,
      title: "Sabujcha",
      description: "Sabujcha, es una pagina saludable, en donde se destaca sus beneficios de los productos de té.",
      projectUrl: "https://sabujcha-rosy.vercel.app/",
      githubUrl: "https://github.com/valentinacamacho/sabujcha",
      methodologyIcons: [FaHtml5, FaCss3Alt],
      type: 'individual'
    },
 
    {
      image: Pro6,
      title: "Hotelía",
      description: "Hotelía es una pagina administrativa para el sector hotelero. Permite a los usuarios ingresar sus datos, buscar y reservar habitaciones, mientras que los administradores pueden gestionar y actualizar la información del hotel. Facilita un proceso de hospedaje eficiente y accesible.",
      methodologyIcons: [FaHtml5, FaCss3Alt, BiLogoBootstrap, BiLogoPhp, TbSql],
      type: 'group'
    },
    {
      title: "Colegio Técnico Aldemar Rojas Plazas",
      description:"La página del Colegio Técnico Aldemar Rojas Plazas muestra tanto el contenido educativo como una plataforma administrativa, gestionada por los profesores, que permite ver información sobre estudiantes, materias y calificaciones.",
      methodologyIcons: [FaHtml5, FaCss3Alt, BiLogoBootstrap, BiLogoPhp, TbSql],
      type: 'group'
    },
  ];

  const filteredProjects = filter === 'all' ? allProjects : allProjects.filter(project => project.type === filter);

  return (
    <div className='container-project'>
      <div className='titulo'>
        <h1>Mis Proyectos</h1>
        <div className="filters">
          <button className="filter-button" onClick={() => setFilter('all')}>Todos</button>
          <button className="filter-button" onClick={() => setFilter('individual')}>Individuales</button>
          <button className="filter-button" onClick={() => setFilter('group')}>Grupales</button>
        </div>
      </div>

      {filteredProjects.map((project, index) => (
        <ProyectsCard
          key={index}
          image={project.image}
          title={project.title}
          description={project.description}
          projectUrl={project.projectUrl}
          githubUrl={project.githubUrl}
          methodologyIcons={project.methodologyIcons}
        />
      ))}
    </div>
  );
}

export default Proyects;
