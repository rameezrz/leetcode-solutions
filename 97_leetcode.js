const sentences = ["please wait", "continue to fight", "continue to win"]

const mostWordsFound = (sentences)=> {
    let count = 0
    for(let i=0;i<sentences.length;i++){
        let words = sentences[i].split(' ')
        count = Math.max(count, parseInt(words.length))
    }
    return count
};

console.log(mostWordsFound(sentences));