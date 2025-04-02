let textura_tierra;
let textura_fondo_estrellas;

function preload() {
    textura_tierra = loadImage('https://i.ibb.co/PD4LyP5/planeta.jpg');
    textura_fondo_estrellas = loadImage("https://i.ibb.co/NNTFKmL/nocheHD.jpg");
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    noStroke();
}

function draw() {
    background(0);
    texture(textura_fondo_estrellas);
    sphere(800); 
    for (let i = 0; i < 3; i++) {
        directionalLight(255, 255, 255 - i * 25, -1, 1, -1); 
    }

    orbitControl();
    rotateZ(-0.3);
    push();
    rotateY(frameCount * 0.01); 
    texture(textura_tierra);
    sphere(200); 
    pop();
}
