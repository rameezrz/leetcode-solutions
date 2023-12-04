const nums = [1,2,3,4], k = 1

const countPairs = (nums, k)=> {
    let pairs = 0
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]===nums[j]){
                if((i*j) % k === 0){
                    pairs++
                }
            }
        }
    }
    return pairs
};

console.log(countPairs(nums,k));