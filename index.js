function buildboard(){
    let board = [];
    for(let i = 0; i < 8; i++){
        for(let j = 0; j < 8; j++){
            board.push([i,j])
        }
    }
    return board;
}



function findIndex(array, target){
    for(let i =0;i < array.length; i++){
        if (array[i] [0] === target[0] && array[i] [1] === target[1]){
            return i;
        }
    }
}


function findnextmove(index, x, y){
    if (index == 0) return [x+2, y+1]
    if (index == 1) return [x+1, y+2]
    if (index == 2) return [x-1, y+2]
    if (index == 3) return [x-2, y+1]
    if (index == 4) return [x-2, y-1]
    if (index == 5) return [x-1, y-2]
    if (index == 6) return [x+1, y-2]
    if (index == 7) return [x+2, y-1]
}

function buildadjlist(board){
    let adjlist = []
    for (let i =0; i < board.length; i++){
        let neighbourds = [];
        for (let j = 0;j < 8; j++){
            let neighbourd = findnextmove(j,board[i][0],board[i][1]);
            if (containsSpot(board, neighbor)){
                neighbourds.push(findIndex(board, neighbourd))
            }
        }
        adjlist[i] = neighbourds;
    }
    return adjlist;
}

function knightMoves(start, end){
    let board = buildboard();
    let startindex = findIndex(board, start);
    let endindex = findIndex(board, end)


};