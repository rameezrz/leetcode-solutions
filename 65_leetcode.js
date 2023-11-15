const nums = [9,4,1,7], k = 2

const minimumDifference = (nums, k)=> {
    if(nums.length === 1) return 0

    let difference = Infinity
    nums.sort((a,b) => a - b)

    let start = 0
    let end = k - 1
    while(end < nums.length) {
        difference = Math.min(difference, nums[end] - nums[start])
        start++
        end++
    }

    return difference
};

console.log(minimumDifference(nums,k));