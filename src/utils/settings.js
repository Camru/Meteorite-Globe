const settings = (() => {
    return {
        BACKGROUND_COLOR: '#1d1d1d',
        HEIGHT: window.innerHeight,
        WIDTH: window.innerWidth,
        FOV: 50 /* Camera frustum vertical field of view (degrees) */,
        ASPECT_RATIO: window.innerWidth / window.innerHeight,
        NEAR: 0.1 /* Camera frustum near plane (degrees)*/,
        FAR: 1000 /* Camera frustum far plane (degrees)*/,
        CAMERA: {X: -35, Y: 17, Z: 120},
        SPOTLIGHT: {X: -30, Y: 20, Z: 0},
        GLOBE: {
            POSITION: {X: 0, Y: 0, Z: 0},
            COLOR: '#ffffff',
            RADIUS: 20,
            SEGMENTS: 32,
            TEXTURE: 'assets/textures/earth-lights.jpg',
            BUMPMAP: 'assets/textures/earth-bump.jpg'
        }
    };
})();