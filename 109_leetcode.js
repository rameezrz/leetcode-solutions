const s = "Myself2 Me1 I4 and3"

const sortSentence = (s) => {
    let words = new Map()
    const arr = s.split(' ')
    arr.forEach((element,index)=>{
        words.set(element[element.length-1], element.slice(0,element.length-1))
    })
    words = new Map([...words.entries()].sort())
    let sentence = ""
    for(const word of words.keys()){
        sentence += words.get(word) + " "
    }
    return sentence.trimEnd()
};

console.log(sortSentence(s));
