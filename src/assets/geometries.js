const geo = (() => {
    function createGlobe(radius, segments, color, texture, bumpMap) {
        const geometry = new THREE.SphereGeometry(radius, segments, segments);
        const material = new THREE.MeshPhongMaterial({color: 0x0e0b19, transparent: true, opacity: 0.5});
        material.map = texture ? loadTexture(texture) : null;
        material.bumpMap = bumpMap ? loadTexture(bumpMap) : null;
        material.bumpScale = 30.0;
        const mesh = new THREE.Mesh(geometry, material);
        return mesh;
    }

    function createPoint(width, height, depth, color) {
        const geometry = new THREE.BoxGeometry( width, height, depth );
        const material = new THREE.MeshBasicMaterial( {color: new THREE.Color(color)} );
        const mesh = new THREE.Mesh( geometry, material );
        return mesh;
    }

    function createSkybox(dimension) {
        const imagePrefix = 'assets/textures/skybox/starfield_';
        const directions = ['ft', 'bk', 'up', 'dn', 'rt', 'lf'];
        const imageSuffix = '.png';
        const geometry = new THREE.BoxGeometry(dimension, dimension, dimension);

        const materialArray = directions.map(direction => {
            return new THREE.MeshBasicMaterial({
                map: new THREE.TextureLoader().load(
                    `${imagePrefix}${direction}${imageSuffix}`
                ),
                side: THREE.DoubleSide
            });
        });

        const material = new THREE.MeshFaceMaterial(materialArray);
        const mesh = new THREE.Mesh(geometry, material);

        return mesh;
    }

    function createParticleSystem (particles, size, color) {
        const particleGeom = new THREE.Geometry();
        const material = new THREE.PointsMaterial({
            color: new THREE.Color(color),
            size: size
        });

        let masses = [];

        //TODO: (camden) sort by ascending date
        for (let i = 0; i < particles.length; i++) {
            const height = particles[i].mass / 100000;
            if (particles[i].hasOwnProperty('geolocation')) {
                let minOrbit = 100;
                let maxOrbit = 100;
                const color = getHeightColor(height);
                const lat = particles[i].geolocation.coordinates[1];
                const long = particles[i].geolocation.coordinates[0];
                const pos = latLongToVector3(
                    lat, 
                    long, 
                    GLOBE.RADIUS, 
                    minOrbit,
                    maxOrbit
                );
                const particle = new THREE.Vector3(pos.x, pos.y, pos.z);
                masses.push(height);
                particleGeom.vertices.push(particle);
            }
        }

        const particleSystem = new THREE.Points(particleGeom, material);

        return {
            particleSystem: particleSystem,
            masses: masses
        }
    }

    return {
        createGlobe,
        createPoint,
        createSkybox,
        createParticleSystem
    };
})();

function loadTexture(textureFile) {
    const loader = new THREE.TextureLoader();
    return loader.load(textureFile);
}

// Convert latitude and longitude to vectrs on the globe 
function latLongToVector3(lat, lon, radius, minOrbit, maxOrbit) {
    const phi = (lat)*Math.PI/180;
    const theta = (lon-180)*Math.PI/180;

    const orbit = Math.floor(Math.random() * (maxOrbit - minOrbit + 1) + minOrbit)

    const x = -(radius+orbit) * Math.cos(phi) * Math.cos(theta);
    const y = (radius+orbit) * Math.sin(phi);
    const z = (radius+orbit) * Math.cos(phi) * Math.sin(theta);

    return new THREE.Vector3(x,y,z);
}


// assign color of each meteor bar based on its height
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

