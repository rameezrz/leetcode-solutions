const height = [1,1]

const maxArea = (height)=> {
    let left = 0
    let right = height.length - 1
    let maxArea = 0

    while(left < right){
        width = right - left
        let h = Math.min(height[left], height[right])
        let area = width * h
        maxArea = Math.max(maxArea, area)

        if(height[left]<height[right]){
            left++
        }else{
            right--
        }
    }
    return maxArea
};

console.log(maxArea(height));