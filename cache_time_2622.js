var TimeLimitedCache = function () {
    this.cache = new Map();
    this.timeouts = new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
    let check = null;
    let check_no = 0;

    if (this.timeouts.has(key) == true) {
        clearTimeout(this.timeouts.get(key));
        check = true;
    } else {
        check = false
    }

    // Save key and value
    this.cache.set(key, value);
    // console.log(key + ":::" + value)
    // console.log(this.cache)
    // console.log(this.cache.size)
    //Schedule the deletion of the key
    const timeoutId = setTimeout(() => {
        if (this.cache.delete(key)) {
            check_no = 1;
        }
    }, duration);


    // Track the timeout ID so it can be cleared if updated later
    this.timeouts.set(key, timeoutId);

    if (check != null) {
        return check;
    } else {
        return check_no;
    }
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
    const val_get = this.cache.get(key);
    if (val_get == undefined) {
        return -1;
    } else {
        return val_get;
    }

};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
    const val_non_ex = this.cache.keys();
    // console.log(val_non_ex.next().value);
    const non_key = [...this.cache.keys()]
    let number = non_key.length;
    if (number == 0) {
        return 0
    } else {
        return number;
    }

};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */