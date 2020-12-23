const fs = require('fs');

// Read input from input.txt file
const answers = fs.readFileSync('day-6/input.txt', {
    encoding: 'utf-8'
}).toString().split('\n');

// Put answers in array
let groups = [];
let group = [];
for (let line of answers) {
    if (line === '') {
        groups.push(group);
        group = [];
    } else {
        group.push(line);
    }
}

// Count 'yes' for each group
let count = [];
let usedChars;
for (let group of groups) {
    usedChars = {};
    groupCount = group.length;
    for (let line of group) {
        for (let character of line) {
            if (usedChars.hasOwnProperty(character)) {
                usedChars[character] = usedChars[character] + 1;
            } else {
                usedChars[character] = 1;
            }
        }
    }

    // Check which answer was given by all members
    Object.entries(usedChars).forEach(([key, value]) => {
        if (value == groupCount) count++;
    });
}

// Print yes count
console.log(`The answer is: ${count}`);