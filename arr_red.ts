type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    let in_c: number = init
    for (let i = 0; i < nums.length; i++) {
        in_c = fn(in_c, nums[i])
    }
    return in_c
};