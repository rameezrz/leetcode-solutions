var countDigits = (num)=> {
    let count = 0;
    let nums=String(num).split('')
    for (let i = 0; i < nums.length; i++){
        if (num % nums[i] == 0) {
            count++
        }
    }
    return count
};

num = 1248
console.log(countDigits(num));