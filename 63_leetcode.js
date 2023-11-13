const nums = [1,12,-5,-6,50,3], k = 4

const findMaxAverage = (nums, k)=> {
    let maxSum = 0
    for(let i=0;i<k;i++){
        maxSum+=nums[i]
    }
    let currentSum = maxSum

    for(let i=k;i<nums.length;i++){
        currentSum = currentSum - nums[i-k] + nums[i]
        if(currentSum>maxSum){
            maxSum = currentSum
        }
    }
    return (maxSum / k)
};

var findMaxAverage2 = function(nums, k) {

    let maxSum = curSum = nums.slice(0, k).reduce((acc, val) => acc + val, 0);
  
      for (let i = k; i < nums.length; i++) {
          curSum += nums[i] - nums[i - k];
          maxSum = Math.max(maxSum, curSum);
      }
  
      return maxSum / k;
  
  }

console.log(findMaxAverage(nums, k));

