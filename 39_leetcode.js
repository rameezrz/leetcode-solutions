const nums = [7,9,1,1,1,3]

// const check = (nums)=> {
//     const sortedArr = [...nums].sort((a,b)=>a-b)
//     for(let i=0; i<nums.length;i++){

//         const rotated = nums.slice(i).concat(nums.slice(0,i))
//         console.log(rotated);

//         if(JSON.stringify(rotated)===JSON.stringify(sortedArr)){
//             return true
//         }

//     }
//     return false
// };

const check = (nums)=>{
    let count = 0
    for(let i=0;i<nums.length-1;i++){
        if(nums[i]>nums[i+1]){
            count++ 
        }
    }
    nums[nums.length-1] > nums [0] && count++
    return count < 2 ? true : false
}

console.log(check(nums));