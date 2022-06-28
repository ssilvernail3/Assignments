


function addCommas(num) {


   let str = String(num);

    if (str.length == 4) {
    return `${str[0]},${str.slice(1)}`
    }

    if (str.length == 5) {
    return `${str[0]}${str[1]},${str.slice(2)}`
    }
    if (str.length == 6) {
    return `${str[0]}${str[1]}${str[2]},${str.slice(3)}`
    }
    if (str.length == 7) {
    return `${str[0]},${str[1]}${str[2]}${str[3]},${str.slice(4)}`
    }
    if (str.length == 8) {
    return `${str[0]}${str[1]},${str[2]}${str[3]}${str[4]},${str.slice(5)}`
    }
    if (str.length == 9) {
    return `${str[0]}${str[1]}${str[2]},${str[3]}${str[4]}${str[5]},${str.slice(6)}`
    }
    if (str.length == 10) {
    return `${str[0]},${str[1]}${str[2]}${str[3]},${str[4]}${str[5]}${str[6]},${str.slice(7)}`
    }


    return str;
    
}






// let str = String(num);

// if (str.length >= 3) {
//     return `${str[0]},${str.slice(1)}`
// }

// if (str.length > 3 && str.length >= 7) {
//     return `${str[0]},${str.slice(1)}`
// }
// return str;