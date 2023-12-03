const { uniq} = require('underscore');

const hw = (arr = [1, 2, 1, 4, 1, 3]) => {
    const obj = {};

    //{"1": 0, "2":0, "3":0, "4":0}
    for (let item of arr) {
        obj[`${item}`] = 0;
    }

    for (let item of arr) {
        obj[`${item}`] += 1;
    }

    const distinct = [];
    //loop over the object keys: "1", "2", "3", "4"
    for (let k in obj) {
        const value = obj[k];
        if (value === 1) {
            distinct.push(Number(k))
        }
    }
    return distinct;
}

const hwv2 = (arr = [1, 2, 1, 4, 1, 3]) => {
    const myFirstSet = new Set(arr)
    return [...myFirstSet]
}

const hwv3 = (arr = [1, 2, 1, 4, 1, 3]) => {
    return uniq(arr);
}
module.exports = { hw, hwv2, hwv3 }


