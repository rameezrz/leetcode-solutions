const nums = [0,0]

const productExceptSelf = (nums)=> {
    let answer = []
    for(let i=0;i<nums.length;i++){
        let product = 1
        for(let j=0;j<nums.length;j++){
            if(j===i){
                continue
            }
            product *= nums[j]
        }
        answer.push(product)
    }
    return answer
};

console.log(productExceptSelf(nums));