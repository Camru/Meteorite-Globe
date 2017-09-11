let canvas = document.getElementById('canvas');
const {
    BACKGROUND_COLOR,
    HEIGHT,
    WIDTH,
    FOV,
    ASPECT_RATIO,
    NEAR,
    FAR,
    CAMERA,
    SPOTLIGHT,
    GLOBE
} = settings;

let renderer = new THREE.WebGLRenderer();
renderer.setClearColor(new THREE.Color(BACKGROUND_COLOR));
renderer.setSize(WIDTH, HEIGHT);
renderer.autoClear = false;
renderer.shadowMap.enabled = true;
canvas.appendChild(renderer.domElement);

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(FOV, ASPECT_RATIO, NEAR, FAR);
camera.position.set(CAMERA.X, CAMERA.Y, CAMERA.Z);
camera.lookAt(new THREE.Vector3(0, 0, 0));

let spotLight = new THREE.SpotLight(0xffffff, 0.4);
spotLight.position.set(SPOTLIGHT.X, SPOTLIGHT.Y, SPOTLIGHT.Z);

let ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

let skybox = geo.createSkybox(1000);
scene.add( skybox );

// Geometries ==================================================================

let globe = geo.createGlobe(
    GLOBE.RADIUS,
    GLOBE.SEGMENTS,
    GLOBE.COLOR,
    GLOBE.TEXTURE,
    GLOBE.BUMPMAP
);
globe.position.set(GLOBE.POSITION.X, GLOBE.POSITION.Y, GLOBE.POSITION.Z);
scene.add(globe);

let particleSystem = geo.createParticleSystem(data, 0.3, '#ffff00');
scene.add(particleSystem);

const cameraHelper = new THREE.CameraHelper(spotLight.shadow.camera);
const axisHelper = new THREE.AxisHelper(100);
const spotLightHelper = new THREE.SpotLightHelper( spotLight );
const OrbitControls = new THREE.OrbitControls(camera);

const stats = initStats();
addSceneDependentControls(scene);

let last = 0; 
render();

function initStats() {
    let statsContainer = document.getElementById('stats');
    let stats = new Stats();
    stats.showPanel(0);
    statsContainer.appendChild(stats.domElement);
    return stats;
}

function render(timestamp) {
    stats.begin();
    stats.end();
    OrbitControls.update();

    updateControls();
    animate(timestamp);

    renderer.render(scene, camera);
    requestAnimationFrame(render);
}

function animate (timestamp) {
    if (timestamp - last > 4) {
        updateParticles();
        last = timestamp;
    }

    // Point spotlight where camera is pointing
    spotLight.position.copy(camera.position);
}

function updateParticles () {
    let {vertices} = particleSystem.geometry;
    // for (let i = 0; i < vertices.length; i++) {
    //     let newPt = movePoint(vertices[i], new THREE.Vector3(0, 0, 0), 0.01);
    //     vertices[i] = newPt;
    // }
    
    particleSystem.rotation.y += 0.005;

    particleSystem.geometry.verticesNeedUpdate = true;
}

function movePoint (start, end, speed) {
    let vec = new THREE.Vector3();
    const origin = new THREE.Vector3(0, 0, 0);
    const direction = vec.subVectors(end, start).normalize();
    const time = start.distanceTo(end) * speed;
    vec.addVectors ( start, direction.multiplyScalar( time ) );
    return vec;
}

function addSceneDependentControls(scene) {
    userControls.numberOfObjects = scene.children.length;
    userControls.outputObjects = () => console.log(scene.children);
    gui.add(userControls, 'outputObjects');
}

function updateControls() {
    OrbitControls.autoRotate = userControls.autoRotate;
    userControls.showAxes ? scene.add(axisHelper) : scene.remove(axisHelper);
    userControls.showSpotLight ? scene.add(cameraHelper) : scene.remove(cameraHelper);
    userControls.showSpotLightHelper ? scene.add(spotLightHelper) : scene.remove(spotLightHelper);
    userControls.spotLightON ? scene.add(spotLight) : scene.remove(spotLight);
}

function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function degreesToRadians (degrees) {
    return degrees*(Math.PI/180); 
}

window.addEventListener('resize', onResize, false);
