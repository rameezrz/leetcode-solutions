const nums = [1,5,2,10]

const maximumDifference = (nums)=> {
    let difference = -1
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]<nums[j]){
                let diff = nums[j]-nums[i]
                difference = Math.max(difference, diff)
            }
        }
    }
    return difference

};

const maxdifference2 = (nums)=>{
    let maxdifference = 0;
    let min = nums[0];
    for(let i =0;i<nums.length;i++){
        min = Math.min(min,nums[i]);
        maxdifference =Math.max(maxdifference,nums[i] - min);
    }
    return maxdifference == 0 ? -1:maxdifference;
}

console.log(maximumDifference(nums));