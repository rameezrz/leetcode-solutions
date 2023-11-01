const nums = [0, 1, 0, 3, 12];

const moveZeroes = (nums) => {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let temp = nums[i];
      nums[i] = nums[index];
      nums[index] = temp;
      index++;
    }
  }
  return nums;
};

const moveZeroes2 = (nums)=>{
    let nonZeroIndex = 0
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==0){
            nums[nonZeroIndex]=nums[i]
            nonZeroIndex++
        }
    }

    for(let i=nonZeroIndex;i<nums.length;i++){
        nums[i]=0
    }

    return nums
}

console.log(moveZeroes2(nums));
