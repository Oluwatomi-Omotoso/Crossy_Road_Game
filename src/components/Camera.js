import *  as THREE from "three";

export function Camera()
{
    /* resolution parameters for the camera */
    const size = 400;
    const viewRatio = window.innerWidth / window.innerHeight; // The aspect ratio
    const width = viewRatio < 1 ? size : size * viewRatio; // specifying the width using a tenary operation. 
    const  height = viewRatio < 1 ?  size / viewRatio: size; // specifying the height using a tenary operation.

    // We'll be using an orthographic camera.
    const camera = new THREE.OrthographicCamera
    (
        width /-2,
        width /2,
        height / 2,
        height /-2,
        100, // near values
        900// far values

        // we will not "render" things that are near or far
    );

    /* More parameters to the camera. */
    camera.up.set(0,0,1);
    camera.position.set(300, -300, 300); // thee camera position in the game (x,y,z) axes.
    camera.lookAt(0, 0, 0); // The camera is set to look at the origin of the map; where the player will be.

    return camera;
}
