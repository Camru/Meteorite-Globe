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

let out = [];
let doneUpdating = false;
let particleBuffer = [];
let continueAnimation = true;
let startAnimation = true;

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
    '#000000',
);
globe.position.set(GLOBE.POSITION.X, GLOBE.POSITION.Y, GLOBE.POSITION.Z);
scene.add(globe);

let {particleSystem, masses} = geo.createParticleSystem(data.meteorites, 0.6, '#ffff00');
let {vertices} = particleSystem.geometry;
let vertCopy = particleSystem.geometry.vertices.slice();
let current = vertCopy.shift();
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
    if (continueAnimation) {
        animate(timestamp);
    }
 
    // Point spotlight where camera is pointing
    spotLight.position.copy(camera.position);

    renderer.render(scene, camera);
    requestAnimationFrame(render);
}

function animate (timestamp) {

    // seed the particleBuffer to start the animation
    if (startAnimation) {
        let nextMeteorite = vertCopy.shift();
        particleBuffer.push(nextMeteorite); 
        startAnimation = false;
    }

    runMeteorAnimation();

      // start animating a new meteorite after crashRate milliseconds 
      if (timestamp - last > Math.abs(1000 - userControls.crashRate)) {
        if (!vertCopy.length) return; 
        let nextMeteorite = vertCopy.shift();
        particleBuffer.push(nextMeteorite);
       last = timestamp;
   }

}

function runMeteorAnimation () {
    // if particle buffer is exhausted, stop meteor animation
    if (!particleBuffer.length) {
        console.log('particle buffer out'); // (camden) 
        continueAnimation = false;
    }

    let speed = userControls.impactSpeed;

    for (let i = 0; i < particleBuffer.length; i++) {
        let index = vertices.indexOf(particleBuffer[i]);
        let nextPosition = movePoint(particleBuffer[i], new THREE.Vector3(0, 0, 0), speed, index);
        let lastPosition = particleBuffer[i];

        if (nextPosition === lastPosition) {
            particleBuffer.splice(i, 1);
            continue;
        }

        particleBuffer[i] = nextPosition;

        // update rendered particle with new vertex position
        vertices[index] = particleBuffer[i];
        particleSystem.geometry.verticesNeedUpdate = true;
    }
}

// //TODO: (camden) should we use BufferGeometry here?
function movePoint (start, end, speed, ind) {
    let {vertices} = particleSystem.geometry;
    let vec = new THREE.Vector3();
    const origin = new THREE.Vector3(0, 0, 0);
    const direction = vec.subVectors(end, start).normalize();
    const distance = start.distanceTo(end);
    if (distance <= GLOBE.RADIUS) {
        let pt = geo.createPoint(0.1, 0.1, masses[ind], '#0000ff');
        
        pt.position.x = vertices[ind].x;
        pt.position.y = vertices[ind].y;
        pt.position.z = vertices[ind].z;
       
        vec.addVectors(pt.position, direction.multiplyScalar(-(masses[ind]/2)));
        pt.lookAt(new THREE.Vector3(0, 0, 0));
        pt.position.set(vec.x, vec.y, vec.z);
        scene.add(pt);
        vertices[ind] = {x: 100000, y: 10000000, z: 100000}; 
        return start;
    }
    vec.addVectors ( start, direction.multiplyScalar( distance * speed) );
    return vec;
}

function addSceneDependentControls(scene) {
    userControls.numberOfObjects = scene.children.length;
    userControls.outputObjects = () => console.log(scene.children);
    gui.add(userControls, 'outputObjects');

    userControls.meteorites = data.meteorites.length;
    gui.add(userControls, 'meteorites');
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
