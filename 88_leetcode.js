const words = ["abc","bcd","aaaa","cbc"], x = "z"

const findWordsContaining = (words, x)=> {
    let indices = []
    for(let i=0;i<words.length;i++){
        if(words[i].includes(x)) indices.push(i)
    }
    return indices
};

console.log(findWordsContaining(words,x));