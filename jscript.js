(function() {
    // Init
    var container = document.getElementById("container"),
        inner = document.getElementById("inner");

    // Mouse
    var mouse = {
        _x: 0,
        _y: 0,
        x: 0,
        y: 0,
        updatePosition: function(event) {
            var e = event || window.event;
            this.x = e.clientX - this._x * 1;
            this.y = (e.clientY - this._y) * -1;
        },
        setOrigin: function(e) {
            this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
            this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
        },
        show: function() {
            return "(" + this.x + ", " + this.y + ")";
        }
    };

    // Track the mouse position relative to the center of the container.
    mouse.setOrigin(container);

    //-----------------------------------------

    var counter = 0;
    var updateRate = 10;
    var isTimeToUpdate = function() {
        return counter++ % updateRate === 0;
    };

    //-----------------------------------------

    var onMouseEnterHandler = function(event) {
        update(event);
    };

    var onMouseLeaveHandler = function() {
        inner.style = "";
    };

    var onMouseMoveHandler = function(event) {
        if (isTimeToUpdate()) {
            update(event);
        }
    };

    //-----------------------------------------

    var update = function(event) {
        mouse.updatePosition(event);
        updateTransformStyle(
            (mouse.y / inner.offsetHeight / 2).toFixed(2),
            (mouse.x / inner.offsetWidth / 2).toFixed(2)
        );
    };

    var updateTransformStyle = function(x, y) {
        var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
        inner.style.transform = style;
        inner.style.webkitTransform = style;
        inner.style.mozTransform = style;
        inner.style.msTransform = style;
        inner.style.oTransform = style;
    };

    //-----------------------------------------

    container.onmouseenter = onMouseEnterHandler;
    container.onmouseleave = onMouseLeaveHandler;
    container.onmousemove = onMouseMoveHandler;
})();


// particle system js starts here

particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 90,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.6,
            "random": false,
            "anim": {
                "enable": false,
                "speed": .8,
                "opacity_min": 0.4,
                "sync": false
            }
        },
        "size": {
            "value": 2,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 20,
                "size_min": 0.01,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 50,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": -600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 2
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

// particle system js ends here

// services section starts here 
$("figure").mouseleave(
    function() {
        $(this).removeClass("hover");
    }
);