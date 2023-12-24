const nums = [2,1,3]

const findNonMinOrMax = (nums)=> {
    if(nums.length <= 2) return -1
    nums.sort((a,b)=>a-b)
    return nums[1]
};

console.log(findNonMinOrMax(nums));