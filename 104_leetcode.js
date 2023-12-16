const names = ["Mary","John","Emma"], heights = [180,165,170]

const sortPeople = (names, heights)=> {
    const namesSorted = new Map()
    for(let i=0;i<heights.length;i++){
        if(heights[i]>heights[i+1]){
            let temp = heights[i]
            heights[i]=heights[i+1]
            heights[i+1] = temp
            namesSorted.set(names[i],i)
        }else{
            namesSorted.set(names[i],i)
        }
    }
    return namesSorted
};

console.log(sortPeople(names,heights));