
import { maxTileIndex, minTileIndex } from "../constants";
import { calcFinalPosition } from "./calculateFinalPosition";
import {metadata as rows} from "../components/Map"

export function invalidPosition(currentPosition, moves)
{
    // executes the calcfinalposition function to determine where the player would end up after a move
    const finalPosition = calcFinalPosition(currentPosition, moves);

    // detects positions off the board.
    if(finalPosition.rowIndex === -1 || finalPosition.tileIndex === minTileIndex || finalPosition.tileIndex === maxTileIndex + 1)
    {
        return false;
    }

    //detecting if we hit a tree
    const finalRow = rows[finalPosition.rowIndex -1];
    if(finalRow && finalRow.type === "forest" && finalRow.trees.some((tree) => tree.tileIndex === finalPosition.tileIndex))
    {
        return false;
    }
    if(finalRow && finalRow.type === "infastructure" && finalRow.streetlamps.some((streetlamp) => streetlamp.tileIndex === finalPosition.tileIndex))
    {
        return false;
    }
    else
    return true;
}

