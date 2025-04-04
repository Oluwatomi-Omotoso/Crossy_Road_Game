import * as THREE from "three";
import { tilesPerRow, tileSize } from "../constants";

export function Road( rowIndex)
{
    const road = new THREE.Group();
    road.position.y = rowIndex * tileSize;


    const foundation = new THREE.Mesh
    (
        new THREE.BoxGeometry(tilesPerRow * tileSize, tileSize, 3),
        new THREE.MeshLambertMaterial({color: 0x454a59})
    );
    foundation.receiveShadow=true;
    road.add(foundation);

    // const markings = new THREE.Mesh
    // (
    //     new THREE.BoxGeometry(tilesPerRow,5,1),
    //     new THREE.MeshLambertMaterial({color: "white", flatShading: true})
    // )

    // markings.position.z = 3;

    // road.add(markings);
    return road;
}