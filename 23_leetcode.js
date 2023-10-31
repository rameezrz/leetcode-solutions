const nums = [1,1,2]

const removeDuplicates = (nums) => {

    if (nums.length === 0) {
        return 0
    }

    let uniquePosition = 1


    for (let i = 1; i < nums.length; i++){
        if (nums[i] !== nums[i - 1]) {
            nums[uniquePosition] = nums[i]
            uniquePosition++
        }
    }
    return uniquePosition
};

console.log(removeDuplicates(nums));