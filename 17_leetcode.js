const moveZeros = (nums) => {
    let nonZeroIndex = 0;
    for (let i = 0; i < nums.length; i++){
        if (nums[i] !== 0) {
            nums[nonZeroIndex] = nums[i]
            if (i !== nonZeroIndex) {
                nums[i]=0
            }
            nonZeroIndex++
        }
    }
    return nums
}

const nums = [0, 1, 0, 3, 12]

console.log(moveZeros(nums));