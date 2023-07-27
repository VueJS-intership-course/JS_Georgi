function deepCop(obj) {
    if (typeof obj !== "object") {
        return obj;
    }
    let copy = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        const value = obj[key];
        copy[key] = deepCop(value);
    }

    return copy;
};

const originalObj = {
    a: 1,
    b: {
        d: 12,
        v: 233
    },
    arr: [1, 2, 3]
}


const copy = deepCop(originalObj);
originalObj.a = 4;
originalObj.b.price = 30
originalObj.arr.push(4)

console.log(originalObj, copy)
