"use strict";
var flat = function (arr, n) {
    if (n <= 0) {
        return arr;
    }
    let result = [];
    let count = n;
    count -= 1;
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (Array.isArray(item)) {
            let arr_ret = flat(item, count);
            result = [...result, ...arr_ret];
        }
        else {
            result.push(arr[i]);
        }
    }
    return result;
};