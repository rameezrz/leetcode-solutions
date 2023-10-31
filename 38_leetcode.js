const nums = [1,2,3,2]

// const sumOfUnique = (nums)=> {
//     let elemCount = {}
//     nums.forEach(element => {
//         elemCount[element] = (elemCount[element] || 0) + 1
//     });
//     const uniqueElements = nums.filter((element)=>elemCount[element]===1)
//     const sum = uniqueElements.reduce((total,element)=>total+=element,0)
//     return sum
// };

// const sumOfUnique = (nums)=>{
//     let elementCount = new Map()

//     for(const num of nums){
//         elementCount.set(num,((elementCount.get(num)||0)+1 ))
//     }
    
//     let sum = 0;

//     for(const [element,count] of elementCount.entries()){
//         if(count===1){
//             sum+=element
//         }
//     }
//     return sum
// }

const sumOfUnique = (nums)=>{
    const uniqueSet = new Set()
    const repeatedSet = new Set()
    let sum = 0

    for(const num of nums){
        if(!uniqueSet.has(num)&&!repeatedSet.has(num)){
            uniqueSet.add(num)
            sum+=num
        }else if(uniqueSet.has(num)){
            uniqueSet.delete(num)
            repeatedSet.add(num)
            sum-=num
        }
    }
    return sum
}

console.log(sumOfUnique(nums));