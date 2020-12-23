const {
    group
} = require('console');
const fs = require('fs');

// Read input from input.txt file
const answers = fs.readFileSync('day-6/input.txt', {
    encoding: 'utf-8'
}).toString().split('\n');

// Put answers in array
let index = 0;
let groups = [];
groups[index] = '';
for (let line of answers) {
    if (line !== '') {
        groups[index] = groups[index] + line;
    } else {
        index++;
        groups[index] = '';
    }
}

// Count 'yes' for each group
let count = [];
let usedChars;
for (let group of groups) {
    usedChars = [];
    for (let character of group) {
        if (usedChars.indexOf(character) === -1) {
            usedChars.push(character);
        }
    }
    count.push(usedChars.length);
}

// Calculate sum of the count array
console.log(`The answer is: ${count.reduce((a, b) => a + b, 0)}`);