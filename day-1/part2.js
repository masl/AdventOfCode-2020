const fs = require('fs');

// Read input from input.txt file
const input = fs.readFileSync('day-1/input.txt', {
    encoding: 'utf-8'
}).toString().split('\n');

// Put the input in a map
let myMap = new Map();
input.forEach((item, index, arr) => {
    myMap[item] = true;
});

// Find the matching num1ues
// and set boolean to false if number used
function findMatch() {
    let result = 0;
    for (let num1 in myMap) {
        num1 = Number.parseInt(num1);
        for (let num2 in myMap) {
            num2 = Number.parseInt(num2);
            for (let num3 in myMap) {
                num3 = Number.parseInt(num3);
                if (num1 + num2 + num3 === 2020 && myMap[num1] && myMap[num2] && myMap[num3]) {
                    myMap[num1.toString()] = false;
                    myMap[num2.toString()] = false;
                    myMap[num3.toString()] = false;
                    result = num1 * num2 * num3;
                }
            }
        }
    }
    return result;
}

console.log(`The answer is: ${findMatch()}`);