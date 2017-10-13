const main = (() => {
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
    
    let particleBuffer = [];
    let continueAnimation = true;
    let startAnimation = true;
    let count = 0;
    
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
    
    let globe = geo.createGlobe(
        GLOBE.RADIUS,
        GLOBE.SEGMENTS,
        GLOBE.COLOR, 
        GLOBE.TEXTURE,
        GLOBE.BUMPMAP
    );
    globe.position.set(GLOBE.POSITION.X, GLOBE.POSITION.Y, GLOBE.POSITION.Z);
    scene.add(globe);
    
    let {particleSystem, masses, dates} = geo.createParticleSystem(data.meteorites, 0.6, '#fffffA');
    let {vertices} = particleSystem.geometry;
    let clonedVertices = particleSystem.geometry.vertices.slice();
    scene.add(particleSystem);

    const timelineValue = document.getElementById('timeline-value');
    
    const cameraHelper = new THREE.CameraHelper(spotLight.shadow.camera);
    const axisHelper = new THREE.AxisHelper(100);
    const spotLightHelper = new THREE.SpotLightHelper( spotLight );
    const OrbitControls = new THREE.OrbitControls(camera, renderer.domElement);
    
    const stats = initStats();
    addSceneDependentControls(scene);
    
    let lastUpdate = null; 
    
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
    
        if (continueAnimation) animate(timestamp);
     
        // Point spotlight where camera is pointing
        spotLight.position.copy(camera.position);
    
        renderer.render(scene, camera);
        requestAnimationFrame(render);
    }
    
    function animate (timestamp) {
    
        // seed the particleBuffer to start the animation
        if (startAnimation) {
            let nextMeteorite = clonedVertices.shift();
            particleBuffer.push(nextMeteorite); 
            startAnimation = false;
        }
    
        runMeteorAnimation();

          // start animating a new meteorite after crashRate milliseconds 
          //TODO: (camden) check out THREE clock
          if (timestamp - lastUpdate > Math.abs(1000 - userControls.crashRate)) {
            if (!clonedVertices.length) return; 
            let nextMeteorite = clonedVertices.shift();
            particleBuffer.push(nextMeteorite);
            lastUpdate = timestamp;
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
            let nextPosition = movePoint(particleBuffer[i], speed, index);
            let lastPosition = particleBuffer[i];
    
            if (nextPosition === lastPosition) {
                particleBuffer.splice(i, 1);
                count++;
                continue;
            }
    
            particleBuffer[i] = nextPosition;
    
            // update rendered particle with new vertex position
            vertices[index] = particleBuffer[i];
            particleSystem.geometry.verticesNeedUpdate = true;
        }
    }
    
    function movePoint (start, speed, index) {
        let {vertices} = particleSystem.geometry;
        let vec = new THREE.Vector3();
        const origin = new THREE.Vector3(0, 0, 0);
        const direction = vec.subVectors(origin, start).normalize();
        const distance = start.distanceTo(origin);

        // create a pt representing meteorite mass, 
        // when the meteorite intersects the globe
        if (distance <= GLOBE.RADIUS) {
            addMassPillars(vec, direction, index);

            // send particles offscreen
            vertices[index] = {x: 100000, y: 10000000, z: 100000}; 

            return start;
        }

        vec.addVectors ( start, direction.multiplyScalar( distance * speed) );
        return vec;
    }

    function addMassPillars (vec, direction, index) {
        let {vertices} = particleSystem.geometry;

        let pt = geo.createPoint(0.1, 0.1, masses[index]);
        
        // set pillar position equal to meteorite's lat,long position 
        pt.position.x = vertices[index].x;
        pt.position.y = vertices[index].y;
        pt.position.z = vertices[index].z;

        // angle pillar towards origin 
        pt.lookAt(new THREE.Vector3(0, 0, 0));

        // move point away from origin by half the pillar height to position it
        // on the surface of the globe
        vec.addVectors(pt.position, direction.multiplyScalar(-(masses[index]/2)));
        pt.position.set(vec.x, vec.y, vec.z);
        scene.add(pt);
    }

    function addSceneDependentControls(scene) {
        userControls.numberOfObjects = scene.children.length;
        userControls.outputObjects = () => console.log(scene.children);
        gui.add(userControls, 'outputObjects');
    
        gui.add(userControls, 'meteorites').listen();

        userControls.resetCamera = function() {
            camera.position.x = CAMERA.X;
            camera.position.y = CAMERA.Y;
            camera.position.z = CAMERA.Z;
        };

        gui.add(userControls, 'resetCamera');
    }
    
    function updateControls() {
        // GUI controls
        OrbitControls.autoRotate = userControls.autoRotate;
        userControls.showAxes ? scene.add(axisHelper) : scene.remove(axisHelper);
        userControls.showSpotLight ? scene.add(cameraHelper) : scene.remove(cameraHelper);
        userControls.showSpotLightHelper ? scene.add(spotLightHelper) : scene.remove(spotLightHelper);
        userControls.spotLightON ? scene.add(spotLight) : scene.remove(spotLight);
        userControls.meteorites = clonedVertices.length;

        // DOM controls
        let ind = count;
        let date = dates[ind];
        timelineValue.innerHTML = date || dates[ind-1];
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

    return {render};
})();

