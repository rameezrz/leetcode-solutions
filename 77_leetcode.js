const nums = [
    48, 90, 9, 21, 31, 35, 19, 69, 29, 52, 100, 54, 21, 86, 6, 45, 42, 5, 62,
    77, 15, 38,
  ],
  target = 6;

const targetIndices = (nums, target) => {
  nums.sort((a, b) => a - b);
  const indices = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      indices.push(i);
    }
  }
  return indices;
};

const targetIndices2 = (nums, target) => {
  return nums
    .sort((a, b) => a - b)
    .map((value, index) => (value === target ? index : -1))
    .filter((value) => value !== -1);
};

console.log(targetIndices2(nums, target));
