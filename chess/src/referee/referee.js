import { getRookMoves } from "./getMoves"

const referee = {
    getRegularMoves : function ({position, piece, rank, file}) {
        return getRookMoves({position, piece, rank, file});
    }
}

export default referee;