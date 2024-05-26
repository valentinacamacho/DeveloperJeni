import React, { useState } from 'react';
import "../Stylesheets/Skills.css";

function Cuadrade({ nombreSkill, tools, iconoSkill: IconoSkill }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className='cuadrado-skill'>
      <div className="cuadrado" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        <div className={`contenido-skill ${hovered ? 'hovered' : ''}`}>
          {hovered ? (
            <>
              <IconoSkill className="icon-skills hovered-icon" />
              <p className='Text-icon-skill'>{tools}</p>
            </>
          ) : (
            <span className="skill-text">{nombreSkill}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cuadrade;
