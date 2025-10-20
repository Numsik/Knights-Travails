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

function knightMoves(start, end){

};