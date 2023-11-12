const nums = [4,4,1,3,1,3,2,2,5,5,1,5,2,1,2,3,5,4],
  k = 2;

  const maxOperations = (nums, k) => {
    nums.sort((a, b) => a - b); 
    let left = 0;
    let right = nums.length - 1;
    let operations = 0;

    while (left < right) {
        const sum = nums[left] + nums[right];

        if (sum === k) {
            operations++;
            left++;
            right--;
        } else if (sum < k) {
            left++;
        } else {
            right--;
        }
    }

    return operations
};

console.log(maxOperations(nums, k));
