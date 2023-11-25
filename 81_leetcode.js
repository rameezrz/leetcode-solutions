const nums = [7,7,7,7]

const smallerNumbersThanCurrent = (nums)=> {
    const smaller = []
    for(let i=0;i<nums.length;i++){
        let count = 0
        for(let j=0;j<nums.length;j++){
            if(nums[i]>nums[j]){
                count++
            }
        }
        smaller.push(count)
    }
    return smaller
};

console.log(smallerNumbersThanCurrent(nums));