var canvas;
var ctx;

var circles = []
var color = 0;
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
        ctx.arc(this.x, this.y, this.r, 0 + rot, Math.PI + rot);
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

    for (var i = 0; i < 100; i++) {
        if (i % 2 == 0)
            circles.push(new Circle(i * 20, 20, "white", 600 - (i * 10)));
        else
            circles.push(new Circle(i * 20, 20, "red", 600 - (i * 10)));
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
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    requestAnimationFrame(render);

    time.calculateDeltaTime();

    if (39 in keys)
        for (var c of circles)
            c.spd *= 1.05;
    if (37 in keys)
        for (var c of circles)
            c.spd *= 0.95;

    if (32 in keys)
        for (var c of circles)
            if (c.color != "white") {
                color += colorDir * time.delta;
                c.color = "hsl(" + color + ", 100%, 50%)"
                if (color > 255)
                    colorDir = -colorDir;
            }

    for (var i = 0; i < circles.length; i++) {
        circles[i].update(time.delta);
    }
}