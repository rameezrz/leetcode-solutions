const n = 0b11111111111111111111111111111101

const hammingWeight = function (n) {
    let count = 0
    while (n !== 0) {
        count += n & 1
        n>>>=1
    }
    return count
};

console.log(hammingWeight(n));

