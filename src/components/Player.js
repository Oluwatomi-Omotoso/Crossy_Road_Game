//This file defines the geometry of the player and also collates the user controls in an array.

import * as THREE from "three";
import { invalidPosition } from "../utitlities/invalidPosition";
import { metadata as rows, addRows } from "./Map";




//Now we create a player function, this defines the player.
export const player = Player();
 function Player()
{
    const playerContainer  = new THREE.Group();
    const player = new THREE.Group();
    player.position.z = 1;

    //The player for now will be a cube. Let's create a cube.
    const body = new THREE.Mesh
    
    (
        new THREE.BoxGeometry(15, 15, 20), // The player has been defined as a cube... well a box with the following dimensions.
        new THREE.MeshLambertMaterial( {color: "white", flatshading: true}) // And now we specify how it reacts to lighting.
    );
    body.position.z = 10;
    body.castShadow = true;
    body.receiveShadow = true;
    player.add(body);

    //And now we add a crown to help navigate
    const crown = new THREE.Mesh
    (
        new THREE.BoxGeometry(2, 4, 2),
        new THREE.MeshLambertMaterial({color: 0xf0619a, flatShading: true})
    );
    crown.position.z = 21;
    crown.castShadow = true;
    crown.receiveShadow = true;
    player.add(crown);

    
    playerContainer.add(player);
    return playerContainer;
}


//we define two variables under a parent called position which define the user's current position.
export const position =
{
    currentRow: 0,
    currentTile: 0,
};

//An empty array that will be filled with user input later.
export const movesQueue = []; 

export function initializePLayer()
{
    player.position.x =0;
    player.position.y = 0;
    player.children[0].position.z = 0;
    
    position.currentRow =0;
    position.currentTile =0;

    movesQueue.length = 0;
}

// This function will push the value for direction into the end of movesQueue array
export function queueMove(direction)
{
    const isValidMove = invalidPosition({rowIndex: position.currentRow, tileIndex: position.currentTile}, [movesQueue, direction]);
    if(!isValidMove)
        return;
    
    movesQueue.push(direction);
}

//This function works by using the first  element in the array, then deleting it.
export function stepCompleted()
{
    
    //It selects the first value in the array.
    const direction = movesQueue.shift();
    
    if(direction === "forward" )
        {
            
            position.currentRow +=1; 
        }// if the ID forward is selected. the current row is now current row + 1.
    if(direction === "backward")
        {
    
            position.currentRow -=1;
    
        } // if the ID backward is selected. The current row is now current row -1.
    if(direction === "right")
        {
            
            position.currentTile +=1;
            
        } // If the ID right is selected. The current tile will now be current tile +1.
    if(direction === "left")
        {
            
            position.currentTile -=1;
            
        }// If the ID left is selected, The current tile will now be current tile -1.
    if(position.currentRow > rows.length - 30)
        addRows();

    const scoreDOM = document.getElementById("score");
    if(scoreDOM)
    scoreDOM.innerText = position.currentRow.toString();
   
    

 



//   if my  new position is greater than my previous position 
    // scoredom.inner text = my position
    // new value = scoredom.innertext
    // if my new position is less than previous position
    // scoredom ineer text = new value


}



