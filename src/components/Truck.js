import * as THREE from "three";
import { tileSize } from "../constants";
import { Wheel } from "./Wheel";

export function Truck(initialTileIndex, direction, color)
{
    const truck = new THREE.Group();
    truck.position.x = initialTileIndex * tileSize;
    if (!direction)
         truck.rotation.z = Math.PI;

    const main = new THREE.Mesh(
        new THREE.BoxGeometry(30, 30, 30),
        new THREE.MeshLambertMaterial({color:color, flatShading: true})
    );
    main.position.z = 20;
    main.position.x = 35;
    main.castShadow = true;
    main.receiveShadow = true;
    truck.add(main);

    const hull = new THREE.Mesh(
        new THREE.BoxGeometry(70, 35, 35),
        new THREE.MeshLambertMaterial({color: "skyblue", flatShading: true})
    )
    hull.position.z =25;
    hull.position.x = -15;
    hull.castShadow = true;
    hull.receiveShadow = true;
    truck.add(hull);


    const frontWheel = Wheel(37);
    const backWheel = Wheel(-35);
    const middleWheel = Wheel(5);
    truck.add(middleWheel);
    
    truck.add(frontWheel);
    truck.add(backWheel);
    return truck;
}