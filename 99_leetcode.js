const word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]

const arrayStringsAreEqual = (word1, word2)=> {
    return word1.join("") === word2.join("")
};

console.log(arrayStringsAreEqual(word1, word2));