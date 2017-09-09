const geo = (() => {
    function createGlobe(radius, segments, color, texture, bumpMap) {
        const geometry = new THREE.SphereGeometry(radius, segments, segments);
        const material = new THREE.MeshPhongMaterial({
            color: new THREE.Color(color)
        });
        material.map = texture ? loadTexture(texture) : null;
        material.bumpMap = bumpMap ? loadTexture(bumpMap) : null;
        material.bumpScale = 40.0;
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

    return {
        createGlobe,
        createPoint,
        createSkybox
    };
})();

function loadTexture(textureFile) {
    const loader = new THREE.TextureLoader();
    return loader.load(textureFile);
}
