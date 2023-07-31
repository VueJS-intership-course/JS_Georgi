function deepCop(obj) {
    if (typeof obj !== "object") {
        return obj;
    }
    let copy = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        if (key == 'self') {
            return null;
        }
        const value = obj[key];
        copy[key] = deepCop(value);
    }

    return copy;
};

function cloneObj(obj, hash = new WeakMap()) {
    if (obj instanceof Function || Object(obj) !== obj) return obj;

    if (hash.has(obj)) return hash.get(obj); // Cyclic reference
    try {
        var result = new obj.constructor();
    } catch (e) {
        result = Object.create(Object.getPrototypeOf(obj));
    }


    return Object.assign(result, ...Object.keys(obj).map(
        k => ({ [k]: cloneObj(obj[k], hash) })));
}

const originalObj = {
    a: 1,
    b: {
        d: 12,
        v: 233
    },
    arr: [1, 2, 3]
}

originalObj.self = originalObj


const copy = cloneObj(originalObj);
originalObj.a = 4;
originalObj.b.price = 30
originalObj.arr.push(4)

console.log(originalObj, copy)
