const s = "aeiou", k = 2
const maxVowels = (s, k)=> {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
    let maxVowels = 0
    let currentVowels = 0

    for(let i=0;i<k;i++){
        if(vowels.has(s[i])){
            currentVowels++
        }
    }

    maxVowels = currentVowels

    for(let i=k;i<s.length;i++){
        if(vowels.has(s[i-k])){
            currentVowels--
        }

        if(vowels.has(s[i])){
            currentVowels++
        }

        maxVowels = Math.max(currentVowels, maxVowels)
    }

    return maxVowels
};

console.log(maxVowels(s,k));