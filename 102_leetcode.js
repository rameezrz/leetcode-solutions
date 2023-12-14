const nums = [1,5,0,3,5]

const minimumOperations = (nums)=> {
    let uniqueNums = new Set()
    for(const num of nums){
        if(num!==0){
            uniqueNums.add(num)
        }
    }
    return uniqueNums.size
};

console.log(minimumOperations(nums));