import "./Pieces.css";

const Piece = ({rank, file, piece}) => {
    return(
        <div className={`piece ${piece} p-${file}${rank}`}/>
    )
}

export default Piece;