const {
    SSL_OP_MSIE_SSLV2_RSA_PADDING
} = require('constants');
const fs = require('fs');

// Read input from input.txt file
const input = fs.readFileSync('day-3/input.txt', {
    encoding: 'utf-8'
}).toString().split('\n');


// Set position and slope for moving
let position = {
    x: 0,
    y: 0
};

const slope = {
    x: 3,
    y: 1
};

let treeCounter = 0;

// Calculate some important values
var mapHeight = input.length;
const mapPieceWidth = input[0].length;
const mapWidth = (mapHeight / slope.y) * slope.x;

const piecesNeeded = Math.ceil(mapWidth / mapPieceWidth);

// Expand the input map by needed size
input.forEach((val, index, arr) => {
    arr[index] = val.repeat(piecesNeeded);
});


movePosition(position);

// Move the thing
function movePosition(position) {
    if (position.y == mapHeight) return;
    if (input[position.y][position.x] == '#') {
        treeCounter++;
    }
    position.x += slope.x;
    position.y += slope.y;
    movePosition(position);
}

console.log(`The answer is: ${treeCounter}`);