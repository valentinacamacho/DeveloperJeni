import React from 'react';
import { FaFigma, FaReact, FaHtml5, FaCss3Alt} from 'react-icons/fa';
import { BiLogoBootstrap } from "react-icons/bi";
import ProyectsCard from '../Components/ProyectsCard';
import Pro1 from "../assets/Images/SabujCha.png";
import Pro2 from "../assets/Images/Nicos.png";
import Pro3 from "../assets/Images/todolist.png";
import Pro4 from "../assets/Images/Miproyect.png";

function Proyects() {
  const methodologyIconsProject1 = [FaHtml5, FaCss3Alt];
  const methodologyIconsProject2 = [FaFigma,FaReact,FaHtml5,FaCss3Alt];
  const methodologyIconsProject3 = [FaFigma,FaReact,FaHtml5,FaCss3Alt,BiLogoBootstrap]
  return (
    <div className='container-project'>
      <div className='titulo'>
        <h1>Mis Proyectos </h1>
      </div>

      <ProyectsCard
        image={Pro4}
        title="Mi portafolio"
        description="Mi portafolio es una muestra personalizada de mis diseños. En este proyecto, quiero exhibir tanto mis habilidades como los proyectos que he realizado. Espero que disfruten explorando mi trabajo tanto como yo disfruté creándolo."
        projectUrl="https://developer-jeni-bj96.vercel.app/"
        githubUrl="https://github.com/valentinacamacho/DeveloperJeni"
        methodologyIcons={methodologyIconsProject3}
      />

      <ProyectsCard
        image={Pro2}
        title="Nik’os Cupcakes"
        description="Nico's Cupcakes es una pagina de 'shopping cart' donde ofrece tortas, cupcakes y paletas personalizadas para ocasiones especiales, brindando momentos gratos llenos de sabores."
        projectUrl="https://nicos-cupcakes.vercel.app/"
        githubUrl="https://github.com/valentinacamacho/nicoscupcakes"
        methodologyIcons={methodologyIconsProject3}
      />

      <ProyectsCard
        image={Pro3}
        title="To-Do-List"
        description="To-Do-List es donde puedes agregar una lista de tareas o ideas, donde permite gestionar agregar y eliminar una lista."
        projectUrl="https://to-do-list-peach-sigma.vercel.app/"
        githubUrl="https://github.com/valentinacamacho/To-do-list"
        methodologyIcons={methodologyIconsProject2}
      />

      <ProyectsCard
        image={Pro1}
        title="Sabujcha"
        description="Sabujcha, es una pagina saludable, en donde se destaca sus beneficios de los productos de té."
        projectUrl="https://sabujcha-rosy.vercel.app/"
        githubUrl="https://github.com/valentinacamacho/sabujcha"
        methodologyIcons={methodologyIconsProject1}
      />
    </div>
  );
}

export default Proyects;