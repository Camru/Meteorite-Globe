const geo = (() => {
    function createGlobe(radius, segments, color, texture, bumpMap) {
        const geometry = new THREE.SphereGeometry(radius, segments, segments);
        const material = new THREE.MeshPhongMaterial({color: color, transparent: true, opacity: 0.8});
        material.map = texture ? loadTexture(texture) : null;
        material.bumpMap = bumpMap ? loadTexture(bumpMap) : null;
        material.bumpScale = 30.0;
        const mesh = new THREE.Mesh(geometry, material);
        return mesh;
    }

    function createPoint(width, height, depth) {
        const geometry = new THREE.BoxGeometry( width, height, depth );
        const material = new THREE.MeshBasicMaterial( {color: getHeightColor(depth)} );
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
        let dates = [];

        for (let i = 0; i < particles.length; i++) {
            const height = Math.pow(settings.MASS_SCALER, particles[i].logMassNormal)
            if (particles[i].hasOwnProperty('geolocation') && !isNaN(height)) {
                let altitude = {min: 500, max: 500};
                const lat = particles[i].geolocation.coordinates[1];
                const long = particles[i].geolocation.coordinates[0];
                const pos = latLongToVector3(
                    lat, 
                    long, 
                    settings.GLOBE.RADIUS, 
                   altitude 
                );
                const particle = new THREE.Vector3(pos.x, pos.y, pos.z);
                masses.push(height);
                dates.push(particles[i].dateYear);
                particleGeom.vertices.push(particle);
            }
        }

        const particleSystem = new THREE.Points(particleGeom, material);

        return {
            particleSystem,
            masses,
            dates
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
function latLongToVector3(lat, lon, radius, altitude) {
    const phi = (lat)*Math.PI/180;
    const theta = (lon-180)*Math.PI/180;

    const orbit = Math.floor(Math.random() * (altitude.max - altitude.min + 1) + altitude.min)

    const x = -(radius+orbit) * Math.cos(phi) * Math.cos(theta);
    const y = (radius+orbit) * Math.sin(phi);
    const z = (radius+orbit) * Math.cos(phi) * Math.sin(theta);

    return new THREE.Vector3(x,y,z);
}


// assign color of each meteor bar based on its height
function getHeightColor(height) {
    let color;
    const colors = {
        low: '#c6e501', 
        med: '#e830ce', 
        high: '#ff9b00',
    };

    if (height < 5) {
        color = colors.low;
    } else if (height < 10) {
        color = colors.med;
    } else if (height >= 10) {
        color = colors.high; 
    } 

    return new THREE.Color(color);
}

