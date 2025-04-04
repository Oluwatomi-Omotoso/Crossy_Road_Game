import * as THREE from "three";

//This js file is to execute this function
export function Renderer()
{
    //Creating the canvas 
    const canvas = document.querySelector("canvas.game");
    if(!canvas) throw new Error("canvas not found");

    //Specifying the properties of the entire window.
    const renderer = new THREE.WebGLRenderer// it's meant to update and refresh 
    (
        {
            alpha: true,
            antialias: true,
            canvas: canvas,
        }
    );
    renderer.setPixelRatio(window.devicePixelRatio); //our renderer variable has its pixel ratio specified based on the devices screen ratio.
    renderer.setSize(window.innerWidth, window.innerHeight); // The scale (zoom ) level is set based off the window width and height.To fill the entire screen
    renderer.shadowMap.enabled = true;

    return renderer;
}