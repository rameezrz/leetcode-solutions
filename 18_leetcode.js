const x = 123

const isPalindrome1 = function (x) {
    let reversedNumber = String(x).split('').reverse().join('')
    return x==reversedNumber
};

const isPalindrome2 = (x) => {
    if (x < 0) {
        return false
    }

    let originalX = x
    let reversedX = 0

    while (x > 0) {
        reversedX = reversedX * 10 + x % 10
        x = Math.floor(x/10)
    }

    return originalX === reversedX
}

console.log(isPalindrome2(x));