const s = "aaabb"

const areOccurrencesEqual = (s)=> {
    let occurence = {}
    for(let char of s){
        occurence[char] = (occurence[char] || 0) + 1
    }
    let count = new Set(Object.values(occurence))
    return count.size === 1
};

console.log(areOccurrencesEqual(s));