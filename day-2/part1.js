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

// Count appereances in string
let counter = 0;
for (let elt of splitted) {
    const regex = new RegExp(elt[2], 'g');
    const letterAmount = elt[3].includes(elt[2]) ? elt[3].match(regex).length : 0;
    const minAmount = Number.parseInt(elt[0]);
    const maxAmount = Number.parseInt(elt[1]);
    if (minAmount <= letterAmount && maxAmount >= letterAmount) counter++;
}

console.log(`The answer is: ${counter}`);