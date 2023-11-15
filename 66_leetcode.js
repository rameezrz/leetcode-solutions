const word = "abcd", ch = "z"

var reversePrefix = function(word, ch) {
    if(!word.includes(ch)) return word
    let index = word.indexOf(ch)
    let prefix = Array.from(word.slice(0, index+1))
    return prefix.reverse().concat(...word.slice(index+1)).join('')
};

console.log(reversePrefix(word,ch));
