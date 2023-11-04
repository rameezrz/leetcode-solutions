const nums1 = [1,2,3,3], nums2 = [1,1,2,2]

const findDifference = (nums1, nums2)=> {
    const numSet1 = new Set(nums1)
    const numSet2 = new Set(nums2)

    const num1 = new Set()
    const num2 = new Set()

    for(let i=0;i<nums2.length;i++){
        if(!numSet1.has(nums2[i])){
            num1.add(nums2[i])
        }
    }

    for(let i=0;i<nums1.length;i++){
        if(!numSet2.has(nums1[i])){
            num2.add(nums1[i])
        }
    }

    return [[...num2], [...num1]]
};

console.log(findDifference(nums1,nums2));