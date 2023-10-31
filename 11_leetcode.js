var isAnagram = (s, t)=> {
    let sWord = [...s]
    let tWord = [...t]
    sWord.sort()
    tWord.sort()
    let count = sWord.length+tWord.length
    for (let i = 0; i < count; i++){
        if (sWord[i] != tWord[i]) {
            return false
        }
    }
    return true
};

s = "anagram", t = "nagaram"

console.log(isAnagram(s,t));
