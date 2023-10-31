const s = "  hello world  "

const reverseWords = (s) => {
    const words = s.split(' ').filter(word => word.length > 0)
    let reversedWords = []
    for (let i = 0; i < words.length; i++){
        reversedWords.unshift(words[i])
    }
    return reversedWords.join(' ')
};

console.log(reverseWords(s));