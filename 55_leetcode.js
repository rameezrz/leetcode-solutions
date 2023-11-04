const getMinDistance = (nums, target, start) => {
    let minDiff = Number.MAX_VALUE;
    let index = -1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            const diff = Math.abs(i - start);
            if (diff < minDiff) {
                minDiff = diff;
                index = i;
            }
        }
    }

    return Math.abs(index - start);
};

const nums = [1, 2, 3, 4, 5];
const target = 5;
const start = 3;

console.log(getMinDistance(nums, target, start)); // Output: 1
