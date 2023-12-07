const nums = [6,5,10]

var countHillValley = function(nums) {
    let count = 0
    nums = nums.filter((element, index, array)=> element !== array[index+1])
    for(let i=1;i<nums.length-1;i++){
        if(nums[i]<nums[i-1] && nums[i]< nums[i+1]) count++
        if(nums[i]>nums[i-1] && nums[i]> nums[i+1]) count++
    }
    return count
};

console.log(countHillValley(nums));