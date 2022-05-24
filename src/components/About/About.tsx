import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Decor } from '../Decor/Decor';
import { Content } from './Content';

type AboutPropsType = {};

export const About: React.FC<AboutPropsType> = () => {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };


  return (
    <section className="about" id="about">
      <Content/>
      <Decor fill="#9F4636"/>
      <Particles
        className="about__decor"
        canvasClassName="about__decor-canvas"
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: false,
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
          },
          particles: {
            color: {
              value: '#ffffff',
            },
            links: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.9,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: 4,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1200,
              },
              value: 70,
            },
            opacity: {
              value: 1,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: 4,
            },
          },
          detectRetina: true,
        }}

        style={{position: 'static'}}
      />
      <div className="line"/>
    </section>
  );
};
