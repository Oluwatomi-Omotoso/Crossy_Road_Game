import * as THREE from "three"
import { maxTileIndex, minTileIndex } from "../constants";



// this function will create an array that will store multiple rows utilizing the metadata we created a wwhilee back.
export function generateRows(amount)
{
    const rows = [];
    for(let i =0; i < amount; i++)
    {
        const rowData = rowGen();
        rows.push(rowData);
    }
    return rows;
}

// This gunction will generate a row randomly. 
//here's where we'll specify for the street lamps 
function rowGen()
{
    const type = randomElement(["car", "truck", "forest", "infastructure"]);
    if(type === "car")
        return generateCarLaneMetadata();
    if(type === "truck")
        return generateTrucklaneMetadata();
    if(type === "forest")
        return generateForestMetaData();
    if(type === "infastructure")
        return generateStreetLampMetaData();
}


function randomElement(array)
{
    return array[Math.floor(Math.random() * array.length)];
}

//Forest metadata
function generateForestMetaData()
{
    const occupiedTiles = new Set();
    const trees = Array.from({ length: 4}, () =>
    {
        let tileIndex;
        do
        {
            tileIndex = THREE.MathUtils.randInt(minTileIndex, maxTileIndex);
        }
        while(occupiedTiles.has(tileIndex));
        occupiedTiles.add(tileIndex);

        const height = randomElement([45,65, 60]);
        return { tileIndex, height};
    });
    return { type: "forest", trees};
    
}


//Streetlamp metadata
function generateStreetLampMetaData()
{
    const occupiedTiles = new Set();
    const streetlamps = Array.from({ length: 4}, () =>
    {
        let tileIndex;
        do
        {
            tileIndex = THREE.MathUtils.randInt(minTileIndex, maxTileIndex);
        }
        while(occupiedTiles.has(tileIndex));
        occupiedTiles.add(tileIndex);

        return { tileIndex};
    });
    return { type: "infastructure", streetlamps};
    
}
//Car lane metadata
function generateCarLaneMetadata()
{
    const direction = randomElement([true, false]);
    const speed = randomElement([125, 156, 188]);

    const occupiedTiles = new Set();

    const vehicles = Array.from({ length: 3}, ()=>
    {
        let initialTileIndex;
        do
        {
            initialTileIndex = THREE.MathUtils.randInt(minTileIndex, maxTileIndex);
        }
        while (occupiedTiles.has(initialTileIndex));
        occupiedTiles.add(initialTileIndex -1);
        occupiedTiles.add(initialTileIndex);
        occupiedTiles.add(initialTileIndex + 1);

        const color = randomElement([0xa52523, 0xbdb638, 0x78b14b]);
        return { initialTileIndex, color};
    });

    return { type: "car", direction, speed, vehicles};

}


//Truck lane meetadata
function generateTrucklaneMetadata()
{
    const direction = randomElement([true, false]);
    const speed = randomElement([125, 156, 188]);
    
    const occupiedTiles = new Set();
    const vehicles = Array.from({ length: 2}, ()=>
    {
        let initialTileIndex;
        do
        {
            initialTileIndex = THREE.MathUtils.randInt( minTileIndex, maxTileIndex);
        }    
        while(occupiedTiles.has(initialTileIndex));
        occupiedTiles.add(initialTileIndex -2);
        occupiedTiles.add(initialTileIndex - 1);
        occupiedTiles.add(initialTileIndex);
        occupiedTiles.add(initialTileIndex + 1);
        occupiedTiles.add(initialTileIndex + 2);
        const color = randomElement([0xa52523, 0xbdb638, 0x78b14b]);
        return{ initialTileIndex, color};
    }
    );
    return { type: "truck", direction, speed, vehicles };

}