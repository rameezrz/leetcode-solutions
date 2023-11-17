const nums = [1,1,1]

const longestSubarray = (nums)=> {
    let left = 0
    let k = 1
    let ans = 0

    for(let right=0;right<nums.length;right++){
        if(nums[right]===0) --k
        
        while(k<0){
            if(nums[left]===0) ++k
            left++
        }

        ans = Math.max(ans, right-left)
    }
    return ans
};

console.log(longestSubarray(nums));