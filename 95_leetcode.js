const nums = [-1,-100,3,99], k = 2

const rotate = (nums, k)=> {
    let temp = 0
    for(let i=0;i<k;i++){
        temp = nums.pop()
        nums.unshift(temp)
    }
    return nums
};

console.log(rotate(nums,k));