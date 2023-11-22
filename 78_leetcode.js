const arr = [1,2,2]

const uniqueOccurrences = (arr)=> {
    const occurences = new Map()
    const seenValues = new Set()
    arr.forEach((element)=>{
        let value = occurences.get(element) ? occurences.get(element) + 1 : 1
        occurences.set(element, value)
    })
    for(let value of occurences.values()){
        if(seenValues.has(value)){
            return false
        }
        seenValues.add(value)
    }
    return true
};

const uniqueOccurrences2 = (arr)=>{
    const occurences = new Map()
    for(let item of arr){
        occurences.set(item, occurences.get(item)+1 || 1)
    }

    const uniqueOccurrences = new Set(occurences.values())
    return uniqueOccurrences.size === occurences.size
}


console.log(uniqueOccurrences2(arr));