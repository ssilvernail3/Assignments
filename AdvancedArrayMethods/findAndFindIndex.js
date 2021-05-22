const users = [
    { username: 'mlewis' },
    { username: 'akagen' },
    { username: 'msmith' }
];

// function findUserByUsername(arr,value) {
//     return arr.find(function (val) {
//         return val.value === value; 
//     })
// }

function myFind(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr) === true) {
            return arr[i];
        };
    };

};

function findUserByUsername(usersArray, username) {
    return usersArray.find(function (user) {
        return user.username === username;
    })
}

function removeUser(usersArray, username) {
    let foundIndex = usersArray.findIndex(function (user) {
        return user.username === username;
    })
    if (foundIndex === -1) return;

    return usersArray.splice(foundIndex, 1)[0];
}
