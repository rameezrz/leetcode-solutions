const nums = [14,33,40,-33,8,-24,-42,30,-18,-34]

const findMaxK = (nums)=> {
    let numSet = new Set(nums)

    let largest = -1
    for(const num of nums){
        if(num > 0 && numSet.has(-num) && num > largest){
            largest = num
        }
    }
    return largest
};

console.log(findMaxK(nums));

