import "./Pieces.css";
import { useAppContext } from '../../contexts/Context';
import referee from '../../referee/referee.js';
import { generateMoves } from "../../reducer/actions/move.js";

const Piece = ({rank, file, piece}) => {

    const {appState, dispatch} = useAppContext();
    const {turn, position} = appState;
    const currentPosition = position[position.length - 1];

    const onDragStart = (e) => {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', `${piece},${rank},${file}`);
        setTimeout(() => {
            e.target.style.display = 'none';
        }, 0);
        if (turn === piece[0]) {
            const moves = referee.getRegularMoves({position: currentPosition, piece, rank, file});
            dispatch(generateMoves({moves}));
        }
    }

    return(
        <div 
            className={`piece ${piece} p-${file}${rank}`}
            draggable={true}
            onDragStart={onDragStart}
        />
    )
}

export default Piece;