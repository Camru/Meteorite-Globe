const userControls = (() => {
    const {BACKGROUND_COLOR, CAMERA} = settings;
    // helpers
    this.showAxes = false;
    this.autoRotate = false;

    // lights
    this.showSpotLight = false;
    this.showSpotLightHelper = false;
    this.spotLightON = true;

    this.resetCamera = function() {
        camera.position.x = CAMERA.X;
        camera.position.y = CAMERA.Y;
        camera.position.z = CAMERA.Z;
    };

    return this;
})();

let gui = new dat.GUI();

let helpersFolder = gui.addFolder('Helpers');
helpersFolder.add(userControls, 'showAxes').listen();
helpersFolder.add(userControls, 'autoRotate').listen();
helpersFolder.open();

let lightsFolder = gui.addFolder('Lights');
lightsFolder.add(userControls, 'showSpotLight').listen();
lightsFolder.add(userControls, 'showSpotLightHelper').listen();
lightsFolder.add(userControls, 'spotLightON').listen();
lightsFolder.open();

gui.add(userControls, 'resetCamera');
