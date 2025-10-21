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

function containsSpot(arr,target){
    if(arr.find(element => element[0] === target[0] && arr.find(element => element[1] === target[1]))){
        return true;
    }
}

function findNextMove(index, x, y){
    if (index == 0) return [x+2, y+1]
    if (index == 1) return [x+1, y+2]
    if (index == 2) return [x-1, y+2]
    if (index == 3) return [x-2, y+1]
    if (index == 4) return [x-2, y-1]
    if (index == 5) return [x-1, y-2]
    if (index == 6) return [x+1, y-2]
    if (index == 7) return [x+2, y-1]
}

function buildInfoArr(boardArr, startIndex) {
    let newArr = [];
    for (let i=0; i < boardArr.length; i++) {
        newArr[i] = {
            distance: null,
            predecessor: null
        }
    }
    newArr[startIndex].distance = 0;
    return newArr;
}

function buildAdjList(board) {
    let adjList = [];
    for (let i=0; i < board.length; i++) {
        let neighbors = [];
        for (let j=0; j < 8; j++) {
            let neighbor = findNextMove(j,board[i][0],board[i][1]);
            if (containsSpot(board, neighbor)) {
                neighbors.push(findIndex(board, neighbor));
            }
        }
        adjList[i] = neighbors;
    }
    return adjList;
}


function constructPath(board, infoarr, item, index, newarr){
    if (item.predecessor === null) return;
    if (item.predecessor != null) {
        newarr.push(board[index])
        constructPath(board,infoarr[item.predecessor], item.predecessor,newarr)
    }
}

function knightMoves(start, end){
    let board = buildboard();
    let startindex = findIndex(board, start);
    let endindex = findIndex(board, end);
    let bfsinfo = buildInfoArr(board, startindex)
    let adjlist = buildAdjList(board)
    let queue = [startindex]
    let u;
    while (u != endindex){
        u = queue.shift()

        for(let i = 0; i < adjlist[u].length; i++){
            let vIndex = adjlist[u][i];

            if (vIndex === endindex){

                bfsinfo[vIndex].predecessor = u;
                let path = []
                constructPath(board, bfsinfo, bfsinfo[vIndex], vIndex, path);
                result = path.reverse().splice(0,0,start);
                console.log(`you made it in ${path.length - 1} moves, your path:`)
                return path;

            }else{
                if(bfsinfo[vIndex].distance == null){
                    bfsinfo[vIndex].distance = bfsinfo[u].distance + 1;
                    bfsinfo[vIndex].predecessor = u;
                    queue.push(vIndex);
                }
            }
        }
    }


};

console.log(knightMoves([0,0],[5,5]))