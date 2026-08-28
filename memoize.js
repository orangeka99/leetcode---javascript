/**
 * @param {Function} fn
 * @return {Function}
 */

function memoize(fn) {
    let cache = new Map()
    return function (...args) {
        let str_c = args.join(",")
        console.log(str_c)
        // console.log(cache)
        if (cache.has(str_c)) {
            return cache.get(str_c)
        } else {
            const result = fn(...args)
            cache.set(str_c, result)
            return result
        }
    }
}



/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */