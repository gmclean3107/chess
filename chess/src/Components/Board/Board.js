import React, { useEffect, useState } from "react";
import Tile from "./Tile";

import whitePawn from '../../../public/pieces/white-pawn.png';
import whiteRook from '../../../public/pieces/white-rook.png';
import whiteKnight from "../../../public/pieces/white-knight.png";
import whiteBishop from "../../../public/pieces/white-bishop.png";
import whiteQueen from "../../../public/pieces/white-queen.png";
import whiteKing from "../../../public/pieces/white-king.png";

import blackPawn from '../../../public/pieces/black-pawn.png';
import blackRook from '../../../public/pieces/black-rook.png';
import blackKnight from "../../../public/pieces/black-knight.png";
import blackBishop from "../../../public/pieces/black-bishop.png";
import blackQueen from "../../../public/pieces/black-queen.png";
import blackKing from "../../../public/pieces/black-king.png";

export default function Board() {
    const [board, setBoard] = useState([]);

    const generateBoard = () => {
        const newBoard = Array(8).fill(null).map(() => Array(8).fill(null));

        for (let i = 0; i < 8; i++) {
            for (let x = 0; x < 8; x++) {
                const isLightTile = (i + x) % 2 === 0;

                const tileClass = isLightTile ? "light-tile" : "dark-tile";

                if (i === 0) {
                    newBoard[i][x] = {
                        imgLoc: x === 0 || x === 7 ? whiteRook :
                            x === 1 || x === 6 ? whiteKnight :
                            x === 2 || x === 5 ? whiteBishop :
                            x === 3 ? whiteQueen :
                            x === 4 ? whiteKing : null,
                        class: tileClass,
                    };
                } else if (i === 1) {
                    newBoard[i][x] = {
                        imgLoc: whitePawn,
                        class: tileClass,
                    };
                } else if (i === 6) {
                    newBoard[i][x] = {
                        imgLoc: blackPawn,
                        class: tileClass,
                    };
                } else if (i === 7) {
                    newBoard[i][x] = {
                        imgLoc: x === 0 || x === 7 ? blackRook :
                            x === 1 || x === 6 ? blackKnight :
                            x === 2 || x === 5 ? blackBishop :
                            x === 3 ? blackQueen :
                            x === 4 ? blackKing : null,
                        class: tileClass,
                    };
                } else {
                    newBoard[i][x] = { imgLoc: "", class: tileClass };
                }
            }
        }
        setBoard(newBoard);
    };

    useEffect(() => {
        generateBoard();
    }, []);

    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
        }}>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(8, 50px)",
                    gridTemplateRows: "repeat(8, 50px)",
                    gap: "0",
                }}
            >
                {board.map((row, i) =>
                    row.map((tile, x) => (
                        <div id={`${i + 1}-${x + 1}`} key={`${i + 1}-${x + 1}`}>
                            {<Tile imgLoc={tile.imgLoc} class={tile.class} />}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
