export const Options = {
    "fullScreen": {
        "enable": true,
        "zIndex": -1,
    },
    /* fps_limit: 60, */
    particles: {
        color: {
            value: "#b3b6bc",
        },
        links: {
            color: "#b3b6bc",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        collisions: {
            enable: true,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed: 2.5,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 80,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 3 },
        },
    },
    "interactivity": {
        "events": {
            "onHover": {
                "enable": true,
                "mode": [
                    "repulse"
                ]
            },
            "onClick": {
                "enable": false,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 5
            },
            "repulse": {
                "distance": 200
            },
            "push": {
                "patricles_nb": 4
            },
            "remove": {
                "patricles_nb": 2
            }
        }
    },
    "retina_detect": true,
    "background": {
        "color": "#0f172a",
        "image": "",
        "position": "50% 50%",
        "repeat": "no-repeat",
        "size": "cover"
    }
}