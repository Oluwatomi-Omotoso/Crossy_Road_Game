//This js file is to collect the user input. It in turn passes it to the Player.js for collation.


import { queueMove } from "./components/Player";
import { deadAlready} from "./hitTest";

let forward= document.getElementById("forward");
let backward = document.getElementById("backward");
let right = document.getElementById("right");
let left = document.getElementById("left");

//if the buttons are clicked, it should execute the quemove direction.
forward?.addEventListener("click", ()=> 
    {
    
        {
            queueMove("forward");

        }
    }); // it adds forward to the movequeue array.


backward?.addEventListener("click", ()=> 
    {
    
        queueMove("backward")
    }
);
right?.addEventListener("click", ()=> 
    {
    
            queueMove("right")
    }
);
left?.addEventListener("click", ()=>
    {
    
            queueMove("left")
    }    
);


//If instead the arrow keys are clicked.
window.addEventListener("keydown", (event) =>
{
    if(event.key === "ArrowUp")
        {
            event.preventDefault(); // preventing the page from instead scrolling.
            queueMove("forward");
            
        }
    
        else if(event.key === "ArrowDown")
        {
            event.preventDefault();
            queueMove("backward");
        }

        else if(event.key === "ArrowRight")
        {
            event.preventDefault();
            queueMove("right");
        }

        else if(event.key === "ArrowLeft")
        {
            event.preventDefault();
            queueMove("left");

        }
})


