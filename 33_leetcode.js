const sequence = "ababc"
const word = "ab"

const maxRepeating = (sequence, word)=> {
    if(!sequence.includes(word)) return 0
    let quest = word
    let count = 1
    while(sequence.includes(quest)){
        quest+=word
        if(sequence.includes(quest)){
            count++
        }
    }
    return count
};

console.log(maxRepeating(sequence,word));