const words = ["def","ghi"]

const firstPalindrome = (words)=> {
    for(const word of words){
        let reversed = word.split('').reverse().join('')
        if(word === reversed){
            return word
        }
    }
    return ""
};

console.log(firstPalindrome(words));