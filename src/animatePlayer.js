import * as THREE from "three";
import { movesQueue, player, position, stepCompleted } from "./components/Player";
import { tileSize } from "./constants";

const moveClock = new THREE.Clock(false);

export function animatePlayer()
{
    // If there is no move in the queue. do nothing.
    if(!movesQueue.length)
        return;

    //if the clock is not running. start it.
    if(!moveClock.running)
        moveClock.start();

    const stepTime = 0.2; // How long it takes for a move to be executed.
    const progress = Math.min(1, moveClock.getElapsedTime() / stepTime) // The progress is the least of two values: 1 and the elapsed time divided by 0.2.

    //execute the functions below.
    setPosition(progress);
    setRotation(progress);

    // Once a move has been executed.
    if(progress >= 1) // if the elapsed time wrt steps is greater than 1 or if there is no move taken
    {
        
        stepCompleted(); // execute move 
        moveClock.stop(); // stop the clock.
    }
}

function setPosition(progress)
{
    // This function will do the actual motion
    const startX  = position.currentTile * tileSize;
  
    const startY = position.currentRow * tileSize;
    let endX = startX; // Initially the end position will assume the initial position.
    let endY = startY;

    if(movesQueue[0]==="forward")
    {
        endY += tileSize;
    }
    if(movesQueue[0]==="backward")
    {
        endY -= tileSize;
    }
    if(movesQueue[0]==="left")
    {
        endX -= tileSize;
    }
    if(movesQueue[0]==="right")
    {
        endX += tileSize;
    }
        
    
    player.position.x = THREE.MathUtils.lerp(startX, endX, progress); // calculates what the x location will be based off threee values, the start point, the end point and the interpolation time 

    player.position.y = THREE.MathUtils.lerp(startY, endY, progress);

    player.position.z = Math.sin(progress*Math.PI) * 8; //the player will jump up on the z-axis using a sin wave. but we limit it to the Pi region to avoid it going under the map. We raise the amplitude up by 8 for a more obvious jump.

}

function setRotation(progress)
{
    let endRotation = 0;
    if(movesQueue[0] === "forward")
        endRotation = 0; // if the player moves forward he doesn't need to rotate. 
    if(movesQueue[0] === "backward")
        endRotation = Math.PI // goes to the 180 degree point.
    if(movesQueue[0] === "right")
        endRotation = -Math.PI / 2; // goes to the -90 degree point.
    if(movesQueue[0] === "left")
        endRotation = Math.PI / 2; // goes to the 90 degree point.


    player.children[0].rotation.z = THREE.MathUtils.lerp(player.children[0].rotation.z, endRotation, progress);
    
}