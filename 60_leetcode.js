const n = 5;

var countTriples = function (limit) {
    let result = 0;
    let x = Math.floor(Math.sqrt(limit));
    for (let m = 2; m <= x; m++) {
        let mSquare = m * m;
        for (let n = 1; n < m; n++) {
            if (m % 2 + n % 2 === 1 && gcd(m, n) === 1) {
                let c = mSquare + n * n;
                if (c <= limit) {
                    result += Math.floor(limit / c);
                }
            }
        }
    }
    return result * 2;
};

function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

console.log(countTriples(n));