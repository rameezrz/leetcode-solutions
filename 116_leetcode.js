let nums = [1,3,2];

const nextPermutation = (nums) => {
  let index = -1;
  const len = nums.length;
  for (let i = len - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      index = i;
      break;
    }
  }
  if (index === -1) {
    return nums.reverse();
  }
  for (let i = len - 1; i > index; i--) {
    if (nums[i] > nums[index]) {
      let temp = nums[i];
      nums[i] = nums[index];
      nums[index] = temp;
      break;
    }
  }
  nums.splice(index+1,len-index-1,...nums.slice(index+1).reverse())
  console.log(nums);
};

nextPermutation(nums);
console.log(nums);
