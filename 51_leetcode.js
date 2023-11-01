const nums = [0]

const minOperations = (nums)=> {
    let count = 0
    for(let i=0;i<nums.length;i++){
        if(nums[i]>=nums[i+1]){
            let diff = nums[i] - nums[i+1] + 1
            nums[i+1] = nums[i+1] + diff
            count+=diff
        }
    }
    return {nums, count}
};

console.log(minOperations(nums));