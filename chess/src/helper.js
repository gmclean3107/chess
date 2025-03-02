export const getCharacter = (file) => String.fromCharCode(file + 96);

export const createPosition = () => {
    const position = new Array(8).fill('').map(x => new Array(8).fill(''));

    for(let i=0; i<8; i++) {
        position[1][i] = 'wp';
        position[6][i] = 'bp';
    }

    position[0] = ['wr', 'wn', 'wb', 'wq', 'wk', 'wb', 'wn', 'wr'];
    position[7] = ['br', 'bn', 'bb', 'bq', 'bk', 'bb', 'bn', 'br'];
    return position;
}

export const copyPos = (position) => {
    const newPos = new Array(8).fill('').map(x => new Array(8).fill(''));

    for (let rank=0; rank<8; rank++) {
        for (let file=0; file<8; file++) {
            newPos[rank][file] = position[rank][file];
        }
    }

    return newPos;
}