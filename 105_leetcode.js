const nums = [1], index = [0]

const createTargetArray = (nums, index)=> {
    const target = []
    for(let i=0;i<index.length;i++){
        target.splice(index[i],0,nums[i])
    }
    return {target}  
};

console.log(createTargetArray(nums,index));