import * as THREE from "three";
import { tilesPerRow, tileSize } from "../constants";

export function Pavement( rowIndex)
{
    const pavement = new THREE.Group();
    pavement.position.y = rowIndex * tileSize;


    const foundation = new THREE.Mesh
    (
        new THREE.BoxGeometry(tilesPerRow * tileSize, tileSize, 3),
        new THREE.MeshLambertMaterial({color: "gray"})
    );
    foundation.receiveShadow=true;
    pavement.add(foundation);
    pavement.position.z = 3;

   
    return pavement;
}