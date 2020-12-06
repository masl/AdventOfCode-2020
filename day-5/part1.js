const fs = require('fs');

// Read input from input.txt file
const boardingPasses = fs.readFileSync('day-5/input.txt', {
    encoding: 'utf-8'
}).toString().split('\n');

// Get highest seat id
let seats = [];
for (let pass of boardingPasses) {
    seats.push(getSeat(pass));
}

let highestSeatId = 0;
for (let seat of seats) {
    if (seat.id > highestSeatId) highestSeatId = seat.id;
}

// Get Seat from input
function getSeat(passport) {
    let min = 0;
    let max = 128;
    for (let i = 0; i < 7; ++i) {
        const ch = passport[i];
        if (ch === 'F') {
            max = max - (max - min) / 2;
        } else if (ch === 'B') {
            min = min + (max - min) / 2;
        }
    }
    const row = min;
    min = 0;
    max = 8;
    for (let i = 7; i < 10; ++i) {
        const ch = passport[i];
        if (ch === 'L') {
            max = max - (max - min) / 2;
        } else if (ch === 'R') {
            min = min + (max - min) / 2;
        }
    }
    const col = min;
    return {
        row: row,
        col: col,
        id: row * 8 + col
    };
}

console.log(`The answer is: ${highestSeatId}`);