import React from 'react';
import Cuadrade from "../Components/Cuadrade";
import { FaReact, FaHtml5, FaCss3Alt, FaFigma, FaGithub, FaGitlab } from "react-icons/fa";
import { DiBootstrap } from "react-icons/di";
import { SiMicrosoftsqlserver, SiMysql, SiMongodb, SiJirasoftware } from "react-icons/si";
import "../Stylesheets/Skills.css";

function Skills() {
  return (
    <div className='cont'>
    <div className="container-skills-wrapper">
      <div className='container-skills'>
        <Cuadrade nombreSkill="HTML5" iconoSkill={FaHtml5} tools={"Front"} />
        <Cuadrade nombreSkill="CSS3" iconoSkill={FaCss3Alt} tools={"Front"} />
        <Cuadrade nombreSkill="Bootstrap" iconoSkill={DiBootstrap} tools={"Front"} />
        <Cuadrade nombreSkill="React" iconoSkill={FaReact} tools={"Framework"} />
        <Cuadrade nombreSkill="SQLServer" iconoSkill={SiMicrosoftsqlserver} tools={"Databases"} />
        <Cuadrade nombreSkill="MySQL" iconoSkill={SiMysql} tools={"Databases"} />
        <Cuadrade nombreSkill="MongoDB" iconoSkill={SiMongodb} tools={"Databases"} />
        <Cuadrade nombreSkill="Figma" iconoSkill={FaFigma} tools={"UI-UX"} />
        <Cuadrade nombreSkill="GitHub" iconoSkill={FaGithub} tools={"Cont version"} />
        <Cuadrade nombreSkill="GitLab" iconoSkill={FaGitlab} tools={"Cont version"} />
        <Cuadrade nombreSkill="Jira Soft" iconoSkill={SiJirasoftware} tools={"Tester"} />
      </div>
    </div>
    </div>

  );
};

export default Skills;
