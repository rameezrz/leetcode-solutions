const nums = [0,1,2]

const smallestEqual = (nums)=> {
    for(let i=0;i<nums.length;i++){
        if(i%10==nums[i]){
            return i
        }
    }
    return -1
};

console.log(smallestEqual(nums));