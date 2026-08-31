type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (
  arr: MultiDimensionalArray,
  n: number,
): MultiDimensionalArray {
  if (n <= 0) {
    return arr;
  }
  let result: MultiDimensionalArray = [];
  let count: number = n;
  count -= 1;

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (Array.isArray(item)) {
      let arr_ret = flat(item, count);
      result = [...result, ...arr_ret];
    } else {
      result.push(arr[i]);
    }
  }

  return result;
};

// let yyy = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
// const ers: number = 1;
// let gg = flat(yyy, ers);
