var numberOfSteps = function(num) {
    let count = 0
    do {
        if (num % 2 == 0) {
            num = num / 2
        } else {
            
            num -= 1
        }
        count += 1
    }while (num > 0)
    return count
};

let num = 123

console.log(numberOfSteps(num));

