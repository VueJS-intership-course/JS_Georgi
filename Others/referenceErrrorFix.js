const user = {
    name: 'Gosho'
};

user.self = user;

function stringify(obj) {
    let cache = [];
    let str = JSON.stringify(obj, function (key, value) {
        if (typeof value === "object" && value !== null) {
            if (cache.indexOf(value) !== -1) {
                return;
            }
            cache.push(value);
        }
        return value;
    });
    cache = null; 
    return str;
}


// function replacer(key, value) {
//     if(key === 'self') {
//         return null
//     }

//     return value
// }

const stringified = JSON.stringify(user, (key, value) => {
    if (key === 'self') {
        return null;
    }

    return value
})


user.price = 20;
// const stringified = stringify(user)
console.log(stringified)
console.log(user)
