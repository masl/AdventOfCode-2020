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
const fields = {
    'byr': /^(19[2-8][0-9]|199[0-9]|200[0-2])$/,
    'iyr': /^(201[0-9]|2020)$/,
    'eyr': /^(202[0-9]|2030)$/,
    'hgt': /^((1[5-8][0-9]|19[0-3])cm)|((59|6[0-9]|7[0-6])in)$/,
    'hcl': /^(#[0-9a-f]{6})$/,
    'ecl': /(amb|blu|brn|gry|grn|hzl|oth)/g,
    'pid': /^([0-9]{9})$/
};

// Check the fields for existence and validation
let fieldsOk = [];
for (let elt of passports) {
    let passOk = true;
    let eltDict = passToDict(elt);
    Object.entries(fields).forEach(([keyFields, valueFields]) => {
        if (!elt.includes(keyFields)) passOk = false;
        Object.entries(eltDict).forEach(([keyEltDict, valueEltDict]) => {
            if (!eltDict[keyEltDict].match(fields[keyEltDict])) passOk = false;
        });
    });
    fieldsOk.push(passOk);
}

// convert passport string to dict
function passToDict(passport) {
    let fields = {};
    let splitted = passport.split(' ');
    splitted.forEach(element => {
        if (element.length > 1) fields[element.split(':')[0]] = element.split(':')[1];
    });
    return fields;
}

console.log(`The answer is: ${fieldsOk.filter((value) => value).length}`);