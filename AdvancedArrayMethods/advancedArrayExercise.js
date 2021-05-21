//1
const values = [1, 2, 3, 4, 5];

function doubleValues(arr) {
    let newArray = [];
    arr.forEach(function (val) {
        newArray.push(val * 2);
    });
    return newArray;
}


//2
const numbers = [1, 2, 3, 4, 5, 6, 23, 45, 62, 88, 64];
function onlyEvenValues(arr) {
    let newArray = [];
    arr.forEach(function (val) {
        if (val % 2 === 0) {
            newArray.push(val);
        }
    })
    return newArray;
};


//3
const names = ['shane', 'ally', 'dexter', 'arlo'];
function showFirstAndLast(arr) {
    let newArray = [];
    arr.forEach(function (val) {
        newArray.push(val[0] + val[val.length - 1]);

    });
    return newArray;
};

//4 

const keyAndValue = [
    { name: 'Elie' },
    { name: 'Tim' },
    { name: 'Matt' },
    { name: 'Colt' }

];

function addKeyAndValue(arr, key, value) {
    let newArray = [];
    arr.forEach(function (val) {
        val[key] = value
    })
    return newArray;
};

//5

// function vowelCount(str) {
//     let splitArr = str.split('');
//     let obj = {};
//     const vowels = 'aeiou';
//     splitArr.forEach(function (val) {
//         let lowerCasedLetter = val.toLowerCase();
//         lowerCasedLetter
//     })
// }


function vowelCount(str) {
    let splitArr = str.split("");
    let obj = {};
    const vowels = "aeiou";

    splitArr.forEach(function (letter) {
        let lowerCasedLetter = letter.toLowerCase()
        if (vowels.indexOf(lowerCasedLetter) !== -1) {
            if (obj[lowerCasedLetter]) {
                obj[lowerCasedLetter]++;
            } else {
                obj[lowerCasedLetter] = 1;
            }
        }
    });
    return obj;
}


//6 

function doubleValuesWithMap(arr) {
    return arr.map(function (val) {
        return val * 2;
    });
}

//This only works for one array 
const nums = [1, 2, 3, 4, 5];
const doubledValues = nums.map(function (num) {
    return num * 2;
})

//7

const times = [1, 7, 2, 0, 2];
function valTimesIndex(arr) {
    return arr.map(function (val, i) {
        return val * i;
    })
};

//8

const namess = [
    { name: 'Shane' },
    { name: 'Ally' },
    { name: 'Dexter' },
    { name: 'Arlo' }
]

function extractKey(arr, key) {
    return arr.map(function (name) {
        return name[key];
    })
};

//9 
const fullNames = [
    { first: 'Shane', last: 'Silvernail' },
    { first: 'Ally', last: 'Silvernail' },
    { first: 'Dexter', last: 'Silvernail' },
    { first: 'Arlo', last: 'Silvernail' }
]

function extractFirstName(arr) {
    return arr.map(function (val) {
        return val.first + ' ' + val.last;
    })
}

//10 
const varibales =
    [
        { first: 'Elie', last: "Schoppik" },
        { first: 'Tim', last: "Garcia", isCatOwner: true },
        { first: 'Matt', last: "Lane" },
        { first: 'Colt', last: "Steele", isCatOwner: true }
    ];

function filterByValue(arr, key) {
    return arr.filter(function (val) {
        return val[key] !== undefined;
    })
};


//11

const vals = [1, 2, 3, 4, 5];
function find(arr, matchVal) {
    return arr.filter(function (val) {
        return val === matchVal;
    })[0];
}

//12

// function removeVowels(str) {
//     const vowels = 'aeiou';
//     let lowerCased = str.toLowerCase();
//     return str.filter(function (val) {
//         return 
//     })
// }

function removeVowels(str) {
    const vowels = "aeiou";
    return str
        .toLowerCase()
        .split("")
        .filter(function (val) {
            return vowels.indexOf(val) === -1;
        })
        .join("");
}

//DIDNT UNDERSTAND SOME OF THESE! 

//13 
const oddVals = [1, 2, 3, 4, 5];
function doubleOddNumbers(arr) {
    return arr.filter(function (val) {
        return val % 2 !== 0;
    })
        .map(function (val) {
            return val * 2;
        })
}