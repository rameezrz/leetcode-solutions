const nums = [1,1,1,1,1]

const runningSum = (nums)=> {
    let sum = 0
    let output = []
    for(let i=0;i<nums.length;i++){
        sum+=nums[i]
        output.push(sum)
    }
    return output
};

console.log(runningSum(nums));