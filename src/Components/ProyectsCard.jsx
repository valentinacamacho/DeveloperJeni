import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { GoLinkExternal } from "react-icons/go";
import "../Stylesheets/ProyectsCard.css"

function ProyectsCard({ image, title, description, projectUrl, githubUrl, methodologyIcons }) {
    const [showTech, setShowTech] = useState(false);
  return (
    <div className="card">
      <div className="image-container">
        <img src={image} alt={title} className="image"/>
        <div className="overlay">
          <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="iconLink">
            <GoLinkExternal className="icon" />
            <span className="icon-text">Visualizar</span>
          </a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="iconLink">
            <FaGithub className="icon" />
            <span className="icon-text">GitHub</span>
          </a>
        </div>
      </div>
      <div className="content">
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
      <div className="details">
        <p className="clickable" onClick={() => setShowTech(!showTech)}>
          Metodologías <span className={`arrow-icon ${showTech ? 'up' : 'down'}`}></span>
        </p>
        {showTech && (
          <div className="tech-icons">
            {methodologyIcons.map((Icon, index) => (
              <Icon key={index} className="tech-icon" />
            ))}
          </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProyectsCard;