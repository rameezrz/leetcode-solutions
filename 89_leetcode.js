const nums = [11,7,2,15]

var countElements = function(nums) {
    let count =0
    const min = Math.min(...nums)
    const max = Math.max(...nums)
    for(const item of nums){
        if(item < max && item > min) count++
    }
    return count
};

console.log(countElements(nums));