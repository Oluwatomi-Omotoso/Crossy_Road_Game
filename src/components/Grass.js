import * as THREE from "three";
import { tilesPerRow, tileSize } from "../constants";

export function Grass( rowIndex) // rowIndex is to be a user specified input 
{
    //We make a container for the grass to make it easier for addition of children.
    const grass = new THREE.Group();
    grass.position.y = rowIndex*tileSize; // Specifying  the position of our grass on the map's y-axis.

    //And now we create the mesh for our grass.
    const foundation = new THREE.Mesh
    (
        //Our geometry for the grass, utilizing our existing variables should be well 17 units long, 42 units wide and say.. 3 units high.
        new THREE.BoxGeometry(tilesPerRow*tileSize, tileSize, 3), 
        new THREE.MeshLambertMaterial({color: 0xbaf455})
        
    );
    // so that's done. But like with blender every mesh has it's origin in it's center, so we'll raise the grass up a bit.

    foundation.position.z =1.5;
    foundation.receiveShadow=true;
    grass.add(foundation);

    return grass;
}
// Now we add these to our map.js and in turn add our map to the main.js