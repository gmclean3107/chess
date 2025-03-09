import actionTypes from "../actionTypes";

export const makeMove = ({newPos}) => {
    return {
        type: actionTypes.MOVE,
        payload: {newPos}
    };
}

export const generateMoves = ({moves}) => {
    return {
        type: actionTypes.GENERATE_MOVES,
        payload: {moves}
    };
}

export const clearMoves = () => {
    return {
        type: actionTypes.CLEAR_MOVES
    }
}