var canvas;
var ctx;

var circles = []
var color = Math.random() * 255;
var colorDir = 1;
var keys = {}

var time = {
    now: 0,
    last: Date.now(),
    delta: 0,
    calculateDeltaTime: function() {
        time.now = Date.now();
        time.delta = (time.now / time.last) / 1000;
        time.last = time.now;
    }
};

class Circle {
    constructor(r, thickness, color, spd) {
        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
        this.r = r;
        this.ls = thickness;
        this.color = color;
        this.rot = 0;
        this.spd = spd;
    }

    update(dt) {
        this.rot += this.spd * dt;
        this.draw();
    }

    draw() {
        var rot = this.rot * Math.PI / 180;
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.ls;
        ctx.beginPath();

        // the rounding is because of some werid glitches that occur when there are too many decimals
        ctx.arc(this.x, this.y, this.r, 0 + rot, Math.PI + Math.round(rot * 1000) / 1000);
        ctx.stroke();
    }

    resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        this.x = window.innerWidth / 2;
        this.y = window.innerHeight / 2;
    }
}

function init() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    for (var i = 0; i < 20; i++) {
        var spd = 3000 - (i * 10);
        if (i % 2 == 0)
            circles.push(new Circle(i * 20, 20, "white", spd));
        else
            circles.push(new Circle(i * 20, 20, "hsl(" + color + ", 100%, 50%)", spd));
    }

    addEventListener("resize", OnResize);
    addEventListener("keydown", function (event) { keys[event.which] = true });
    addEventListener("keyup", function (event) { delete keys[event.which] });
    requestAnimationFrame(render);
}

function OnResize() {
    for (var i = 0; i < circles.length; i++) {
        circles[i].resize();
    }
}

function render() {

    requestAnimationFrame(render);

    ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
    ctx.fillRect(0,0, canvas.clientWidth, canvas.clientHeight);

    time.calculateDeltaTime();

    // changing spd
    if (39 in keys) {
        for (var c of circles)
            if (c.spd < 1000000)
                c.spd *= 1.05;
    }
    if (37 in keys) {
        for (var c of circles)
            if (c.spd > 1000)
                c.spd *= 0.95;
    }

    // changing colour
    if (32 in keys)
        for (var c of circles)
            if (c.color != "white") {
                color += colorDir * 100 * time.delta;
                c.color = "hsl(" + color + ", 100%, 50%)"
                if (color > 255)
                    colorDir = -colorDir;
            }

    for (var i = 0; i < circles.length; i++) {
        circles[i].update(time.delta);
    }
}