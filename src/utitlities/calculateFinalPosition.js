// When a specific command is executed. It stores the rowindex and the tile index of the neww position in an array.
// The array is called moves


export function calcFinalPosition(currentPosition, moves)
{
    // The reduce function is a callback function that works like this:

    // it accepts up to four arguments. The reduce method will call the function one time for each element in the array.

    return moves.reduce((position, direction) =>
    {

        // if the player moves forward. the variable rowindex is incremented by 1 in the position array. the tile remains the same. 
        if(direction === "forward")
            return{
        rowIndex: position.rowIndex + 1, tileIndex: position.tileIndex,       
         };



         // if the player moves backward the row index for position is decremented once
        if(direction === "backward")
            return{
            rowIndex: position.rowIndex -1, tileIndex:position.tileIndex,
        };


        // if the player moves to the right instead the tileindex for position is incremented.
        if(direction === "right")
            return{
                rowIndex:position.rowIndex, tileIndex:position.tileIndex+1,
        }


        // if the player moves to the left the tile index for position is decremented.
        if(direction === "left")
            return{
                rowIndex:position.rowIndex, tileIndex: position.tileIndex-1,
         };


         return position;
    }, currentPosition);
}