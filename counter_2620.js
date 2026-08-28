var createCounter = function(n) {
    console.log(n)
    return function() {
        return n++;
    };
};