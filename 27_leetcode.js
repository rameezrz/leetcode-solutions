const nums = [1,2,3,4,4,3,2,1]
const n = 4

const shuffle = (nums, n)=> {
    let newArr = []
    for (let i = 0; i < n; i++){
        newArr.push(nums[i])
        newArr.push(nums[i+n])
    }
    return newArr
};

console.log(shuffle(nums,n));