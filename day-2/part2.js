const fs = require('fs');

// Read input from input.txt file
const input = fs.readFileSync('day-2/input.txt', {
    encoding: 'utf-8'
}).toString().split('\n');

// Split and format input
let splitted = [];
input.forEach((val, index, arr) => {
    val = val.replace(':', '');
    splitted.push(val.split(/-|\s|:[\s]W/));
});

// Count exact appereances in string
let counter = 0;
for (let elt of splitted) {
    const firstIndex = Number.parseInt(elt[0]) - 1;
    const secondIndex = Number.parseInt(elt[1]) - 1;

    const firstMatch = elt[3][firstIndex] == elt[2];
    const secondMatch = elt[3][secondIndex] == elt[2];

    if (firstMatch != secondMatch) counter++;
}

console.log(`The answer is: ${counter}`);