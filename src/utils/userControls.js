const userControls = (() => {
    const {BACKGROUND_COLOR, CAMERA} = settings;
    this.showAxes =            false;
    this.showSpotLight =       false;
    this.showSpotLightHelper = false;
    this.spotLightON =         true;

    this.resetCamera = function() {
        camera.position.x = CAMERA.X;
        camera.position.y = CAMERA.Y;
        camera.position.z = CAMERA.Z;
    };
   
    return this;
})();


let gui = new dat.GUI();
gui.add(userControls, 'showAxes').listen();
gui.add(userControls, 'showSpotLight').listen();
gui.add(userControls, 'showSpotLightHelper').listen();
gui.add(userControls, 'spotLightON').listen();
gui.add(userControls, 'resetCamera');
