import * as THREE from "three";
import { tileSize } from "../constants";
import { Wheel } from "./Wheel";

export function Car(initialTileIndex, direction, color)
{
    const car = new THREE.Group();
    car.position.x = initialTileIndex * tileSize;
    if (!direction)
         car.rotation.z = Math.PI;

    const cabin = new THREE.Mesh(
        new THREE.BoxGeometry(60,30,15),
        new THREE.MeshLambertMaterial({color:color, flatShading: true})
    );
    cabin.position.z = 12;
    cabin.castShadow = true;
    cabin.receiveShadow = true;
    car.add(cabin);

    const roof = new THREE.Mesh(
        new THREE.BoxGeometry(33,24,12),
        new THREE.MeshLambertMaterial({color: "white", flatShading: true})
    )
    roof.position.z =25.5;
    roof.position.x = -6;
    roof.castShadow = true;
    roof.receiveShadow = true;
    car.add(roof);


    const backWheel = Wheel(-18);
    const frontWheel = Wheel(18);
    car.add(frontWheel);
    car.add(backWheel);
    return car;
}