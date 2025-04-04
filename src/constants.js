// Here we want to specify all the necessary variables that we'll use to  create our map.
// for each row we want to have a total of 17 tiles. from -8 to 0 to 8.
export const minTileIndex = -23; 
export const maxTileIndex = 23;
export const tilesPerRow = maxTileIndex - minTileIndex + 1;
export const tileSize = 42; // each tile is to be 42 units large.
