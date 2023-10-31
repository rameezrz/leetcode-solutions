var getNoZeroIntegers = function(n) {
    let initCheck = n - 1
    if (!initCheck.toString().includes('0')) {
        return [n - 1, 1]
    } else {
        let result = [n, 0]
        while (result[1] !== n) {
            result[0]--
            result[1]++
            if (!result[0].toString().includes('0')&&!result[1].toString().includes('0')) {
                return result
            }
        }
    }
};

n = 1010

console.log(getNoZeroIntegers(n));