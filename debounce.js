"use strict";
function debounce(fn, t) {
    let timer;
    return function (...args) {
        if (timer !== undefined) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn(...args);
        }, t);
    };
}
