const nums = [9,4,1,7], k = 2

const minimumDifference = (nums, k)=> {
    if(nums.length === 1) return 0
    const sorted = nums.sort((a,b)=>b-a)
    return sorted[0]-sorted[1]
};

console.log(minimumDifference(nums,k));