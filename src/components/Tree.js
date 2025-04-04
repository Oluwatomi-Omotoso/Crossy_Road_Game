 import * as THREE from "three";
import { tileSize } from "../constants";

export function Tree(tileIndex, height)
{
    const tree = new THREE.Group(); // We make a container group called tree.
    tree.position.x = tileIndex * tileSize // The tree is positioned on a tile 42 times


    //we make the trunk
    const trunk = new THREE.Mesh(
        new THREE.BoxGeometry(15, 15, 20),
        new THREE.MeshLambertMaterial({color: 0x4d2926, flatShading: true,})
    );
    trunk.position.z = 10; // Again since the origin is in the center
    trunk. castShadow = true;
    trunk.receiveShadow = true;
    tree.add(trunk);

    const crown = new THREE.Mesh(
        new THREE.BoxGeometry(30, 30, height),
        new THREE.MeshLambertMaterial({color: 0x7aa21d, flatShading: true,})
    );
    crown.position.z = height / 2 + 10; // we want to scatter a bunch of these trees on a row.
    //  so the height for now will be hardcoded in their metadata
    crown.receiveShadow = true;
    crown. castShadow = true;
    trunk.add(crown);
    return tree;
}
