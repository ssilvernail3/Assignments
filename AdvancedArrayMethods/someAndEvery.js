//1

const numbers = [2, 2, 2, 4, 6, 6, 8];
function hasOddNumber(arr) {
    return arr.some(function (number) {
        return number % 2 !== 0;
    })
    return false;
}

//2

function hasAZero(number) {
    const newNum = number.toString();
    return newNum.split('').some(function (number) {
        return number === '0';
    });
    return false;
};

//3 

const nums = [1, 6, 23, 4, 3, 65, 53, 21, 33, 29];

function hasOnlyOddNumbers(arr) {
    return arr.every(function (num) {
        return num % 2 !== 0;
    })
    return false;
};


//4

function hasNoDuplicates(arr) {
    return arr.every(function (num) {
        if (arr.lastIndexOf(num) === arr.indexOf(num)) return true;
    });
    return false;
};


//5

let objects = [
    { title: "Instructor", first: 'Elie', last: "Schoppik" },
    { title: "Instructor", first: 'Tim', last: "Garcia", isCatOwner: true },
    { title: "Instructor", first: 'Matt', last: "Lane" },
    { title: "Instructor", first: 'Colt', last: "Steele", isCatOwner: true }
];

function hasCertainKey(arr, key) {
    return arr.every(function (val) {
        return val[key];
    })
    return false;
};

//6 

function hasCertainValue(arr, key, value) {
    return arr.every(function (val) {
        return val[key] === value;
    })
    return false;
};
