import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 1000,
            density: {
              enable: true,
              value_area: 15,
            },
          },
          line_linked: {
            enable: true,
            opacity: 0.03,
          },
          move: {
            direction: "right",
            speed: 0.05,
          },
          size: {
            value: 1,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 3,
              opacity_min: 0.05,
            },
          },
        },
        collisions: {
          enable: true
        },
        shape: {
          type: "triangle"
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "push"
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: false,
      }}
    />
  );
}

export default Particle;
