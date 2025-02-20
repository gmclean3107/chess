import React, { useEffect, useState } from "react";
import Tile from "./Tile";

export default Board = (props) => {
    const [board, setBoard] = useState(Array(8).fill(null).map(() => Array(8).fill(null)));

    const generateBoard = () => {
        let newBoard = board.map(row => row.slice());
        for (let i = 0; i < 8; i++) {
            for (let x = 0; x < 8; x++) {
                if ((i + x) % 2 === 0) {
                    newBoard[i][x] = <Tile class="light-tile" />;
                } else {
                    newBoard[i][x] = <Tile class="dark-tile" />;
                }
            }
        }
        setBoard(newBoard);
    };

    useEffect(() => {
        generateBoard();
    }, []);

    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(8, 50px)", gridTemplateRows: "repeat(8, 50px)", gap: "0" }}>
            {board.map((row, i) =>
                row.map((tile, x) => (
                    <div id={`${i+1}-${x+1}`} key={`${i+1}-${x+1}`}>
                        {tile}
                    </div>
                ))
            )}
        </div>
    );
};
