// Input: nums = [10,4,8,3]
// Output: [15,1,11,22]
// Explanation: The array leftSum is [0,10,14,22] and the array rightSum is [15,11,3,0].
// The array answer is [|0 - 15|,|10 - 11|,|14 - 3|,|22 - 0|] = [15,1,11,22].

const nums = [10,4,8,3]

const leftRightDifference = (nums)=> {
    let leftSum = [0]
    let rightSum = [0]
    let answer = []
    let sum = 0
    for(let i=0;i<nums.length-1;i++){
        sum = leftSum[i]+nums[i]
        leftSum.push(sum)
    }
    sum = 0
    for(let i=nums.length-1;i>0;i--){
        sum += nums[i]
        rightSum.unshift(sum)
    }

    for(let i=0;i<nums.length;i++){
        let diff = Math.abs(leftSum[i]-rightSum[i])
        answer.push(diff)
    }
    return answer
};

console.log(leftRightDifference(nums));