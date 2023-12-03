const nums = [-6,2,5,-2,-7,-1,3], target = -2

const countPairs = (nums, target)=> {
    nums.sort((a,b)=>a-b)
    let pairs  = 0
    let left = 0
    let right = nums.length-1
    while(left < right){
        if(nums[left]+nums[right] < target){
            pairs += right-left
            left++
        }else{
            right--
        }
    }
    return pairs
};

const countPairs2 = (nums, target)=> {
    let pairs  = 0
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]<target){
                pairs++
            }
        }
    }
    return pairs
};

console.log(countPairs2(nums,target));