const fs = require('fs');

// Read input from input.txt file
const input = fs.readFileSync('day-3/input.txt', {
    encoding: 'utf-8'
}).toString().split('\n');

let treeList = [];

treeList.push(getTrees(1, 1));
treeList.push(getTrees(3, 1));
treeList.push(getTrees(5, 1));
treeList.push(getTrees(7, 1));
treeList.push(getTrees(1, 2));

let product = 1;
treeList.forEach(element => {
    product *= element;
});

function getTrees(slopeX, slopeY) {
    // Set position and slope for moving
    let position = {
        x: 0,
        y: 0
    };

    const slope = {
        x: slopeX,
        y: slopeY
    };

    // Calculate some important values
    const mapHeight = input.length;
    const mapPieceWidth = input[0].length;
    const mapWidth = (mapHeight / slope.y) * slope.x;

    const piecesNeeded = Math.ceil(mapWidth / mapPieceWidth);

    // Expand the input map by needed size
    input.forEach((val, index, arr) => {
        arr[index] = val.repeat(piecesNeeded);
    });

    return movePosition(position, slope, mapHeight, 0);
}


// Move position and count trees
function movePosition(position, slope, height, treeCounter) {
    if (position.y >= height) {
        return treeCounter;
    }
    if (input[position.y][position.x] == '#') {
        treeCounter++;
    }
    position.x += slope.x;
    position.y += slope.y;
    return movePosition(position, slope, height, treeCounter);
}

console.log(`The answer is: ${product}`);