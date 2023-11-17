const nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3

const longestOnes = (nums, k)=> {
    let left = 0
    let ans = 0
    let window = 0

    for(let right=0;right<nums.length;right++){
        window += nums[right]

        while(window+k < right-left + 1){
            window -= nums[left]
            left++
        }
        ans = Math.max(ans,right-left+1)
    }
    return ans
};

console.log(longestOnes(nums,k));