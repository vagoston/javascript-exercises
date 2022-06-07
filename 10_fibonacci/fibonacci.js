const fibonacci = function(n) {
    if (n == 0) return 0;
    if (n < 0) return "OOPS"
    let a = 0;
    let b = 1;
    while(n > 1) {
        let oldB = b;
        b += a;
        a = oldB;
        --n;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
