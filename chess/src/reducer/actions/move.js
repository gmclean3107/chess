import actionTypes from "../actionTypes";

export const makeMove = ({newPos}) => {
    return {
        type: actionTypes.MOVE,
        payload: {newPos}
    };
}