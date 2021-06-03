function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function (num) {
        return num % 2 === 0
    });
};

function filterOutOdds() {
    (...args) => args.filter(num => num % 2 === 0);
};

// const arguments = [67, 25, 365, 4, 54, 6, 8, 110];


function findMin(...arguments) {
    let min = arguments[0];
    return argument[i] < min ? argument[i] : min;

};


const findMind = (...args) => Math.mind(...args);


const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });


const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(val => v * 2)];

const removeRandom = (items) => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];

};



const extend = (arr1, arr2) => {
    return [...arr1, ...arr2];
};

const addKeyVal = (obj, key, val) => {
    return { ...obj, [key]: val };
}

const removeKey = (obj, key) => {
    return { ...obj, ...obj.slice([key]) };
}

//or 

const removeKey = (obj, key) => {
    let newObj = { ...obj };
    delete newObj[key];
    return newObj;

};

const combine = (obj1, obj2) => {
    return { ...obj1, ...obj2 };

};

const update = (obj, key, val) => {
    return { ...obj, [key]: val };
}

