import * as THREE from "three";
import { tileSize } from "../constants";

export function StreetLamp(tileIndex, height)
{
    const StreetLamp = new THREE.Group(); // We make a container group called tree.
    StreetLamp.position.x = tileIndex * tileSize // The tree is positioned on a tile 42 times
    StreetLamp.position.z = 55;

    //we make the pole
    const pole = new THREE.Mesh(
        new THREE.BoxGeometry(5,5,110),
        new THREE.MeshLambertMaterial({color: 0x6e7381, flatShading: true,})
    );
    pole.position.z 
    pole. castShadow = true;
    pole.receiveShadow = true;
    StreetLamp.add(pole);

    const crown = new THREE.Mesh(
        new THREE.BoxGeometry(8,15,5),
        new THREE.MeshLambertMaterial({color: 0x6e7381, flatShading: true,})
    );
    crown.position.z = 54; 
    crown.position.y = -4;
    crown.receiveShadow = true;
    crown. castShadow = true;
    pole.add(crown);


    const platform = new THREE.Mesh(
        new THREE.BoxGeometry(12,12,5),
        new THREE.MeshLambertMaterial({color: 0x6e7381, flatShading: true,})
    )
    platform.position.z = -49;
    pole.add(platform);
    pole.rotation.z = Math.PI;
    return StreetLamp;
}
