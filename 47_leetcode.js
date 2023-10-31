const s = "chopper is not a tanuki", k = 5

// Method 1 
const truncateSentence = (s, k)=> {
    const words = s.split(' ')
    const wordsArr = []
    for(let i=0;i<k;i++){
        wordsArr.push(words[i])
    }
    return wordsArr.join(' ')
};

//Method 2 
const truncateSentence2 = (s,k)=>{
    return s.split(" ").slice(0,k).join(" ")
}

console.log(truncateSentence2(s,k));