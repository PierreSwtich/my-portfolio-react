import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";

const ParticlesComponent = () => {
    const options = useMemo(() => {
        const directionAngle = 55;
        return {
            particles: {
                number: {
                    value: 255,
                    density: {
                        enable: true,
                        value_area: 800,
                    },
                },
                color: {
                    value: "#ffffff"
                },
                size: {
                    value: 2,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0,
                        sync: false
                    },
                },
                line_linked: {
                    enable: false,
                    opacity: 0.03,
                  },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    },
                },
                polygon: {
                    nb_sides: 5
                },
                move: {
                    enable: true,
                    speed: 0.3,
                    direction: directionAngle,
                    random: true,
                    straight: true,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                      enable: false,
                      rotateX: 600,
                      rotateY: 1200
                    }
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: true,
                        speed: 0.2,
                        opacity_min: 0,
                        sync: false,
                    },
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                      onhover: {
                        enable: true,
                        mode: "bubble"
                      },
                      onclick: {
                        enable: true,
                        mode: "push"
                      },
                      resize: true
                    },
                    modes: {
                      grab: {
                        distance: 400,
                        line_linked: {
                          opacity: 1
                        }
                      },
                      bubble: {
                        distance: 83.91608391608392,
                        size: 1,
                        duration: 3,
                        opacity: 1,
                        speed: 3
                      },
                      repulse: {
                        distance: 200,
                        duration: 0.4
                      },
                      push: {
                        particles_nb: 4
                      },
                      remove: {
                        particles_nb: 2
                      }
                    }
                  },
                retina_detec: true,
            }
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

const particlesInit = useCallback((engine) => {
    loadSlim(engine)
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

return <Particles init={particlesInit} options={options} />;
};

export default ParticlesComponent;