import actionTypes from "./actionTypes";

export const Reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.MOVE: {
            let {turn, position} = state;

            turn = turn == 'w' ? 'b':'w';

            position = [
                ...position,
                action.payload.newPos
            ];

            return {
                ...state,
                position: position
            };
        }

        case actionTypes.GENERATE_MOVES: {
            return {
                ...state,
                moves: action.payload.moves
            };
        }
        
        case actionTypes.CLEAR_MOVES: {
            return {
                ...state,
                moves: []
            }
        }

        default:
            return state;
    }


    return state;
}