const fs = require('fs');

// Read input from input.txt file
const input = fs.readFileSync('day-4/input.txt', {
    encoding: 'utf-8'
}).toString().split('\n');

let passports = [];
let temp = '';
for (let elt of input) {
    temp += elt + ' ';
    if (elt == '') {
        passports.push(temp);
        temp = '';
    }
}

// Define the given fields we have to check for
const fields = [
    'byr',
    'iyr',
    'eyr',
    'hgt',
    'hcl',
    'ecl',
    'pid'
];

// Check the passports for fields
let fieldsOk = [];
for (let elt of passports) {
    let ok = true;
    for (let field of fields) {
        if (!elt.includes(field)) ok = false;
    }
    fieldsOk.push(ok);
}

console.log(`The answer is: ${fieldsOk.filter((value) => value).length}`);