"use strict";
function reduce(nums, fn, init) {
    let in_c = init;
    for (let i = 0; i < nums.length; i++) {
        in_c = fn(in_c, nums[i]);
    }
    return in_c;
}
;
