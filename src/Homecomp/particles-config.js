const particlesConfig = {
    autoPlay: true,
    background: {
      color: {
        value: "#035968"
      },
      image: "",
      position: "",
      repeat: "",
      size: "",
      opacity: 1
    },
    
    manualParticles: [],
    motion: {
      disable: false,
      reduce: {
        factor: 4,
        value: true
      }
    },
    particles: {
      bounce: {
        horizontal: {
          random: {
            enable: false,
            minimumValue: 0.1
          },
          value: 1
        },
        vertical: {
          random: {
            enable: false,
            minimumValue: 0.1
          },
          value: 1
        }
      },
      collisions: {
        bounce: {
          horizontal: {
            random: {
              enable: false,
              minimumValue: 0.1
            },
            value: 1
          },
          vertical: {
            random: {
              enable: false,
              minimumValue: 0.1
            },
            value: 1
          }
        },
        enable: false,
        mode: "bounce",
        overlap: {
          enable: true,
          retries: 0
        }
      },
      color: {
        value: "#FF0000",
        animation: {
          h: {
            count: 0,
            enable: true,
            offset: 0,
            speed: 10,
            decay: 0,
            sync: true
          },
          s: {
            count: 0,
            enable: false,
            offset: 0,
            speed: 1,
            decay: 0,
            sync: true
          },
          l: {
            count: 0,
            enable: false,
            offset: 0,
            speed: 1,
            decay: 0,
            sync: true
          }
        }
      },
      destroy: {
        mode: "none",
        split: {
          count: 1,
          factor: {
            random: {
              enable: false,
              minimumValue: 0
            },
            value: 3
          },
          rate: {
            random: {
              enable: false,
              minimumValue: 0
            },
            value: {
              min: 4,
              max: 9
            }
          },
          sizeOffset: true
        }
      },
      gradient: [],
      groups: {},
      links: {
        blink: false,
        color: {
          value: "#fff"
        },
        consent: false,
        distance: 100,
        enable: false,
        frequency: 1,
        opacity: 1,
        shadow: {
          blur: 5,
          color: {
            value: "#000"
          },
          enable: false
        },
        triangles: {
          enable: false,
          frequency: 1
        },
        width: 1,
        warp: false
      },
      move: {
        angle: {
          offset: 0,
          value: 90
        },
        attract: {
          distance: 200,
          enable: true,
          rotate: {
            x: 2000,
            y: 2000
          }
        },
        center: {
          x: 50,
          y: 50,
          radius: 0
        },
        decay: 0,
        distance: {},
        direction: "none",
        drift: 0,
        enable: true,
        gravity: {
          acceleration: 9.81,
          enable: false,
          inverse: false,
          maxSpeed: 50
        },
        path: {
          clamp: false,
          delay: {
            random: {
              enable: false,
              minimumValue: 0
            },
            value: 0
          },
          enable: true,
          options: {
            sides: 6,
            turnSteps: 30,
            angle: 30
          },
          generator: "polygonPathGenerator"
        },
        outModes: {
          default: "destroy",
          bottom: "destroy",
          left: "destroy",
          right: "destroy",
          top: "destroy"
        },
        random: false,
        size: false,
        speed: 3,
        spin: {
          acceleration: 0,
          enable: false
        },
        straight: false,
        trail: {
          enable: true,
          length: 20,
          fillColor: {
            value: "#000"
          }
        },
        vibrate: false,
        warp: false
      },
      number: {
        density: {
          enable: true,
          area: 800,
          factor: 1000
        },
        limit: 0,
        value: 0
      },
      opacity: {
        random: {
          enable: false,
          minimumValue: 0.1
        },
        value: 1,
        animation: {
          count: 0,
          enable: false,
          speed: 2,
          decay: 0,
          sync: false,
          destroy: "none",
          startValue: "random"
        }
      },
      reduceDuplicates: false,
      repulse: {
        random: {
          enable: false,
          minimumValue: 0
        },
        value: 0,
        enabled: false,
        distance: 1,
        duration: 1,
        factor: 1,
        speed: 1
      },
      rotate: {
        random: {
          enable: false,
          minimumValue: 0
        },
        value: 0,
        animation: {
          enable: false,
          speed: 0,
          decay: 0,
          sync: false
        },
        direction: "clockwise",
        path: false
      },
      shadow: {
        blur: 0,
        color: {
          value: "#000"
        },
        enable: false,
        offset: {
          x: 0,
          y: 0
        }
      },
      shape: {
        options: {},
        type: "circle"
      },
      size: {
        random: {
          enable: false,
          minimumValue: 1
        },
        value: 2,
        animation: {
          count: 0,
          enable: false,
          speed: 5,
          decay: 0,
          sync: false,
          destroy: "none",
          startValue: "random"
        }
      },
      stroke: {
        width: 0
      },
      zIndex: {
        random: {
          enable: false,
          minimumValue: 0
        },
        value: 0,
        opacityRate: 1,
        sizeRate: 1,
        velocityRate: 1
      }
    },
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
    responsive: [],
    style: {},
    themes: [],
    zLayers: 100,
    emitters: {
      autoPlay: true,
      fill: true,
      life: {
        wait: false
      },
      rate: {
        quantity: 1,
        delay: 0.25
      },
      shape: "square",
      startCount: 0,
      size: {
        mode: "percent",
        height: 0,
        width: 0
      },
      direction: "none",
      position: {
        x: 50,
        y: 50
      }
    }
  }

  export default particlesConfig