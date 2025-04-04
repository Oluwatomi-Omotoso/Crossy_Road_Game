import * as THREE from "three";

export function DirectionalLight()
{
    const dirLight = new THREE.DirectionalLight();
    dirLight.position.set(-100, -100, 200);
    dirLight.up.set(0,0,1);
    dirLight.castShadow = true;

    dirLight.shadow.mapSize.width = 3300;
    dirLight.shadow.mapSize.height = 3300; 
    dirLight.shadow.camera.left = -600;
    dirLight.shadow.camera.right = 600;
    dirLight.shadow.camera.top = 600;
    dirLight.shadow.camera.bottom = -600;
    dirLight.shadow.camera.near = 10;
    dirLight.shadow.camera.far = 1000;


    return dirLight;
}