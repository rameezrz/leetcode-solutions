const nums = [5,6,2,7,4]

var maxProductDifference = function(nums) {
    nums.sort((a,b)=>a-b)
    let pairA = 0
    let pairB = 0
    pairA = nums[nums.length-1] * nums[nums.length-2]
    pairB = nums[0] * nums[1]
    return pairA - pairB
};

console.log(maxProductDifference(nums));