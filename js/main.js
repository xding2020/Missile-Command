// Global scene variables
var scene;
var camera;
var renderer;

// Global object variables
var city;
var mothership;
var cursor;
var missileSender;


// Initilization
function init() {
    // Init scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0566c7);
    // Init light
    var light = new THREE.PointLight(0xFFFFFF);
    light.position.x = 0;
    light.position.y = 0;
    light.position.z = 1000;
    scene.add(light);
    var light = new THREE.PointLight(0xEEEEEE);
    light.position.x = 0;
    light.position.y = 1000;
    light.position.z = 0;
    scene.add(light);
    // Init Objects
    city = new City();
    mothership = new Mothership();
    cursor = new Cursor();
    missileSender = new MissileSender();
    // Init camera
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    //camera = new THREE.OrthographicCamera(window.innerWidth / -2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2, 1, 1000);
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 800;
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    // Init renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
}

// Animation


function animate() {
    requestAnimationFrame(animate);
    mothership.moveMissiles();
    missileSender.moveMissiles();
    renderer.render(scene, camera);
};

function start() {
    init();
    animate();
}

start();