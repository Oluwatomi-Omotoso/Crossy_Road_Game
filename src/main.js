import  * as THREE from "three";
import { Renderer } from "./components/Renderer";
import { Camera } from "./components/Camera";
import { player, initializePLayer } from "./components/Player";
import { map, initializeMap} from "./components/Map";
import { DirectionalLight } from "./components/DirectionalLight";
import { animateVehicles} from "./animateVehicles";
import "./collectUserInput";
import { animatePlayer } from "./animatePlayer";
import { hitTest,deadAlready} from "./hitTest";

//Importing the player into the scene 
const scene = new THREE.Scene();
scene.add(player);

//Importing the map into the scene
scene.add(map);

//importing a general ambient light
const ambientLight = new THREE.AmbientLight();
scene.add(ambientLight);

//importing directional lighting
const dirLight = DirectionalLight();
dirLight.target = player;
// dirLight.position.set(-100, -100, 200);
player.add(dirLight);

//importing the camera
const camera = Camera();
player.add(camera)

//After every element has been imported we now initialize the map to bring them all to life


//This is for the scenereo where the player hits a vehicle. And selects  the retry button.
const scoreDOM = document.getElementById("score");
const resultDOM = document.getElementById("result-container");
initializeGame();
document.querySelector("#retry")?.addEventListener("click", 
  
    initializeGame
  );


// And now to initialize it 
function initializeGame()
{
  initializePLayer();
  initializeMap();
  deadAlready.dead = false;
  
if(scoreDOM)
  {
    scoreDOM.innerText = "0";
  }
  if(resultDOM)
  {
    resultDOM.style.visibility = "hidden";
  }
}








//importing the renderer
const renderer = Renderer();
renderer.setAnimationLoop(animate);




function animate()
{
  
 
  animateVehicles();
  hitTest();
  
  if(deadAlready.dead=== false)
      animatePlayer();
  
    
    renderer.render(scene, camera);
    
}

const music = document.getElementById("background-music");

function toggleMusic() 
{
  const button = document.getElementById("mute-button");
  if (music.muted) {
    music.muted = false;
    button.textContent = "🔊"; // Sound on icon
  } else {
    music.muted = true;
    button.textContent = "🔇"; // Sound off icon
  }
}

