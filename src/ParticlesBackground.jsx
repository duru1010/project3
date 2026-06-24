"use client";

import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <div className="absolute inset-0 w-full h-full z-0">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: false, // Important: keep within the container
          particles: {
            number: { value: 60 },
            color: { value: "#000000" }, // Black particles for visibility
            links: { 
              enable: true, 
              distance: 150, 
              color: "#000000", 
              opacity: 0.4 
            },
            move: { 
              enable: true, 
              speed: 1 
            },
            size: { value: 3 }
          },
        }}
      />
    </div>
  );
}