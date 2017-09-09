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

let ambientLight = new THREE.AmbientLight(0xfffffff, 1);
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

mapPoints();

const cameraHelper = new THREE.CameraHelper(spotLight.shadow.camera);
const axisHelper = new THREE.AxisHelper(100);
const spotLightHelper = new THREE.SpotLightHelper( spotLight );
const OrbitControls = new THREE.OrbitControls(camera);

const stats = initStats();
addSceneDependentControls(scene);
render();

function initStats() {
    let statsContainer = document.getElementById('stats');
    let stats = new Stats();
    stats.showPanel(0);
    statsContainer.appendChild(stats.domElement);
    return stats;
}

function render() {
    stats.begin();
    stats.end();
    OrbitControls.update();

    updateControls();
    animate();

    renderer.render(scene, camera);
    requestAnimationFrame(render);
}


function animate () {
    spotLight.position.copy(camera.position);
}

function addSceneDependentControls(scene) {
    userControls.numberOfObjects = scene.children.length;
    userControls.outputObjects = () => console.log(scene.children);
    gui.add(userControls, 'outputObjects');
}

function updateControls() {
    OrbitControls.autoRotate = true;
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

function latLongToVector3(lat, lon, radius, height) {
    const phi = (lat)*Math.PI/180;
    const theta = (lon-180)*Math.PI/180;

    const x = -(radius+height) * Math.cos(phi) * Math.cos(theta);
    const y = (radius+height) * Math.sin(phi);
    const z = (radius+height) * Math.cos(phi) * Math.sin(theta);

    return new THREE.Vector3(x,y,z);
}

function degreesToRadians (degrees) {
    return degrees*(Math.PI/180); 
}

function getHeightColor(height) {
    const colors = {
        med: '#e830ce', 
        low: '#c6e501', 
        high: '#ff1818'
    };

    if (height < 1) {
        return colors.low;
    } else if (height < 10) {
        return colors.med;
    } else if (height >= 10) {
        return colors.high; 
    } else {
        return '#ffffff';
    }

}

function mapPoints () {
    let mets = data;
    let rad = 5;
    let geom = new THREE.Geometry();

    for (let i = 0; i < mets.length; i++) {
        let height = mets[i].mass/100000;
        if (mets[i].hasOwnProperty('geolocation')) {
            let color = getHeightColor(height);
            let point = geo.createPoint(0.1, 0.1, height, color);
            let lat = mets[i].geolocation.coordinates[1];
            let long = mets[i].geolocation.coordinates[0];
            let pos = latLongToVector3(lat, long, GLOBE.RADIUS, height/2);
            point.position.set(pos.x, pos.y, pos.z); 
            point.lookAt( new THREE.Vector3(0,0,0) );
            // THREE.GeometryUtils.merge(geom, point);
            scene.add(point);
        }
    }

    // let total = new THREE.Mesh(geom,new THREE.MeshFaceMaterial());
    // scene.add(total);
}

window.addEventListener('resize', onResize, false);
