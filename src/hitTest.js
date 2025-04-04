import * as THREE from "three";
import { player, position } from "./components/Player";
import {  metadata as rows } from "./components/Map";


const resultDOM = document.getElementById("result-container");
const finalScoreDOM = document.getElementById("final-score");

export const deadAlready =
{
    dead: false,
}

export function hitTest()
{
    
    const row = rows[position.currentRow -1];
    if(!row)
        return;

    if(row.type === "car" || row.type === "truck")
    {
        
        const playerBoundingBox = new THREE.Box3();
        playerBoundingBox.setFromObject(player);

        row.vehicles.forEach(({ref}) =>
        {
            if(!ref)
                throw Error("vehicle reference is missing");

            const vehicleBoundingBox = new THREE.Box3();
            vehicleBoundingBox.setFromObject(ref);

            if(playerBoundingBox.intersectsBox(vehicleBoundingBox))
            {
                deadAlready.dead = true;
                if(!resultDOM || !finalScoreDOM)
                    return;
                resultDOM.style.visibility = "visible";
                
                finalScoreDOM.innerText = position.currentRow.toString();
            
            }

        });

    }
    

}

