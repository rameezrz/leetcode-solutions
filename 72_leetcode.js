const nums1 = [1,2,2], nums2 = [4,3,3], nums3 = [5]

const twoOutOfThree = (nums1, nums2, nums3)=> {
    const num1 = new Set(nums1)
    const num2 = new Set(nums2)
    const num3 = new Set(nums3)
    const result = new Set()
    for(let i=0;i<nums1.length;i++){
        if(num2.has(nums1[i]) || num3.has(nums1[i])){
            result.add(nums1[i])
        }
    }
    for(let i=0;i<nums2.length;i++){
        if(num1.has(nums2[i]) || num3.has(nums2[i])){
            result.add(nums2[i])
        }
    }
    for(let i=0;i<nums3.length;i++){
        if(num1.has(nums3[i]) || num2.has(nums3[i])){
            result.add(nums3[i])
        }
    }
    return Array.from(result)
};

console.log(twoOutOfThree(nums1, nums2, nums3));