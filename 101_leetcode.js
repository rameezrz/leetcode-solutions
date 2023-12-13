const s = "abcdd"

const repeatedCharacter = (s)=> {
    const letters = new Set()
    for(let i=0;i<s.length;i++){
        if(letters.has(s[i])){
            return s[i]
        }
        letters.add(s[i])
    }
};

console.log(repeatedCharacter(s));