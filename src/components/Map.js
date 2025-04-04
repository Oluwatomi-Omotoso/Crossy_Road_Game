import * as THREE from "three";
import { Grass } from "./Grass";
import { Pavement } from "./Pavement";
import { Tree } from "./Tree";
import { Car } from "./Car";
import { Road } from "./Road";
import { Truck } from "./Truck";
import { generateRows } from "../utitlities/generateRows";
import {StreetLamp} from "./streetlamp";


/* scattering the trees on a row */
// We create an array. It will act as a sort of storehouse for our metadata. 
// For now we'll hardcode the location and heights for three trees.
export const metadata = 
[
    
    // {type: "forest", trees: [{ tileIndex: -3, height: 50 }, {tileIndex: 2, height: 30 }, {tileIndex: 5, height: 50}]},
    // {type: "truck", direction: true, speed: 120, vehicles:[{initialTileIndex: -1, color: 0x00ff00}]},

    //  {type: "forest", trees: [{ tileIndex: -3, height: 50 }, {tileIndex: 2, height: 30 }, {tileIndex: 5, height: 50}]},

    //  {type: "car", direction: false, speed: 200, vehicles: [{initialTileIndex: 2, color: 0xff0000}]},

]



// The map will for now be a container. 
export const map = new THREE.Group();

//This function is to initialize the map.
export function initializeMap()
{
  metadata.length = 0;
  map.remove(...map.children);
  for(let rowIndex = 0; rowIndex>-5; rowIndex--)
  {
    const grass = Grass(rowIndex);
    map.add(grass);
  }
  addRows();
}



// This  is currently supposed to be for the trees, but we will also apply it for the road and cars. 
export function addRows()
{

    const newMetadata = generateRows(20);
    

    const startIndex = metadata.length;
    metadata.push(...newMetadata);

    newMetadata.forEach((rowData, index) =>// basicaly for each element in the array do the following
        {
            if(!rowData)
                return;
            const rowIndex = startIndex + index + 1;// We're placing our trees with grass on another row 1 index away. BTW rowIndex and index are three.js specified variables.

            /* For the tress */
            if(rowData.type === "forest")
            {
                const row = Grass(rowIndex);

                // we add our Tree function to a grassrowmesh on rowindex "1".
                rowData.trees.forEach(({tileIndex, height}) => 
                {
                    const tree = Tree(tileIndex, height);
                    row.add(tree);
                });
                // we add the new row that now has trees to the map.
                map.add(row);
            }

            /* For the streetlamps*/
            if(rowData.type === "infastructure")
                {
                    const row = Pavement(rowIndex);
    
                    // we add our Steetlamp function to a grassrowmesh on rowindex "1".
                    rowData.streetlamps.forEach(({tileIndex}) => 
                    {
                        const streetlamp = StreetLamp(tileIndex);
                        row.add(streetlamp);
                    });
                    // we add the new row that now has trees to the map.
                    
                    map.add(row);
                }
            
            /* For the cars */
            
            if(rowData.type === "car")
            {
                const row = Road(rowIndex);

                //We add our Cars on a Road plane mesh 
                rowData.vehicles.forEach((vehicle) =>
                {
                    const car = Car(vehicle.initialTileIndex, rowData.direction, vehicle.color);
                    vehicle.ref = car;
                    row.add(car);
                });
                map.add(row);
            }

            /* For the trucks */
            if(rowData.type === "truck")
            {
                const row = Road(rowIndex);
                rowData.vehicles.forEach((vehicle)=>
                {
                    const truck = Truck( vehicle.initialTileIndex, rowData.direction, vehicle.color);
                    vehicle.ref = truck;
                    row.add(truck);
                }
            );
            map.add(row);
            }
            
        });
}


