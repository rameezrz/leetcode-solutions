const nums = [1,3,5,6], target = 5

const searchInsert = (nums, target)=> {
    let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (nums[middle] === target) {
      return middle;
    } else if (target < nums[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  // If the target is not found, return the index where it should be inserted
  return left;
};

console.log(searchInsert(nums,target));