import "./Pieces.css";
import Piece from "./Piece";
import { useState, useRef } from "react";
import { createPosition, copyPos } from "../../helper";
import { useAppContext } from "../../contexts/Context";
import { clearMoves, makeMove } from "../../reducer/actions/move";

const Pieces = () => {

    const ref = useRef();

    const {appState, dispatch} = useAppContext();

    const currentPosition = appState.position[appState.position.length-1];

    const calculateCoords = (e) => {
        const {top,left,width} = ref.current.getBoundingClientRect();
        const size = width/8;
        const y = Math.floor((e.clientX-left)/size) ;
        const x = 7-Math.floor((e.clientY-top)/size);

        return {x,y};
    }

    const onDrop = (e) => {
        const newPos = copyPos(currentPosition);
        const {x, y} = calculateCoords(e);
        const [piece, rank, file] = e.dataTransfer.getData('text').split(',');

        if (appState.moves?.find((m) => m[0] === x && m[1] === y)) {
            newPos[rank][file] = '';
            newPos[x][y] = piece;
    
            dispatch(makeMove({newPos}));
        }

        dispatch(clearMoves());

    }

    const onDragOver = (e) => {
        e.preventDefault();
    }

    return(
        <div 
            ref={ref}
            className='pieces'
            onDrop={onDrop}
            onDragOver={onDragOver}>
            {currentPosition.map((r, rank) => 
                r.map((f, file) => 
                    currentPosition[rank][file]
                    ? <Piece
                        key = {rank+'-'+file}
                        rank = {rank}
                        file = {file}
                        piece = {currentPosition[rank][file]}
                        /> 
                        : null
            ))}
        </div>
    );
}

export default Pieces;