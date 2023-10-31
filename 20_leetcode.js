const s = "Let's take LeetCode contest"

const reverseWords = (s) => {
    const words = s.split(' ')

    const reversedWords = words.map((word) => {
        return word.split('').reverse().join('')
    })

    return reversedWords.join(' ')
};

console.log(reverseWords(s));