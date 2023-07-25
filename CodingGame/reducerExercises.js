
// //-------Find sum of array--------//
function solve(arr) {
    return arr.reduce((a, b) => {
        return a + b
    }, 0)
}

console.log(solve([1, 8, 9, -5, 10]))
// //-------Find sum of array--------//



// //---------Turn array of objects into single object------------//
function arrToObj(arr) {
    return arr.reduce((obj, item) => {
        obj[item.key] = item.count;
        return obj;
    }, {});
}

console.log(arrToObj([
    { key: 'apple', count: 1 },
    { key: 'orange', count: 40 },
    { key: 'banana', count: 158 }
]))
// //---------Turn array of objects into single object------------//



// //---------flatten 2D array-----------//
function flattenArr(arr) {
    return arr.reduce((res, item) => {
        if (Array.isArray(item)) {
            return res.concat(flattenArr(item));
        } else {
            res.push(item);
            return res;
        }
    }, []);
}


console.log(flattenArr([1, 3, [4, 5], 6, 7, 8, [9, 10]]))
// //---------flatten 2D array-----------//





//---------flatten 3D array-----------//
function flatten3DArr(arr)  {
    return arr.reduce((res,item) => {
        if(Array.isArray(item)) {
            return res.concat(flatten3DArr(item))
        }else {
            res.push(item);
            return res;
        }
    }, [])
}
console.log(flatten3DArr([[1, [2,3, [4,4]]], 6, 7, [8, 9]]))
//---------flatten 3D array-----------//

