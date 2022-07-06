const smallerSquare = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"]
  ];


// take values from first array [0], push to new array, 
// take values from [1], reverse; push to new array
// take values from [2], push to new array 
// if array.idx % 2 === 0 push to array : array.idx % 2 === 1 reverse order, push to new array




function unroll(squareArray) {
    let newArray = [];
    for (let i = 0; i < squareArray.length; i++){
        if (i % 2 === 0) {
            newArray.push(...squareArray[i]);
        } else {
            newArray.push(...squareArray[i].reverse())
        };

    };
    return newArray;
};


module.exports = unroll;
