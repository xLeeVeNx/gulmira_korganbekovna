import React from 'react';

// Components
import { Decor } from '../Decor/Decor';
// Components

interface ISkills {
}

const Skills: React.FC<ISkills> = ({}) => {
  return (
    <section className="skills" id="skills">
      <div className="skills__inner">
        <h2 className="skills__title">Видео поздравление</h2>
        <iframe className="skills__video" src="https://www.youtube.com/embed/ndNCbpuyF-w" title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen />
        <Decor fill="#F1DCC9"/>
      </div>
    </section>
  );
};

export default Skills;
