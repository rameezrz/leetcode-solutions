const words = ["leetcode","win","loops","success"], pref = "code"

const prefixCount = (words, pref)=> {
    let count = 0
    for(let i=0;i<words.length;i++){
        let isWord = true
        for(let j=0;j<pref.length;j++){
            if(words[i][j]!==pref[j]){
                isWord = false
                break
            }
        }
        if(isWord) count++
    }
    return count
};

const prefixCount2 = (words, pref)=>{
    let count = 0;
    for(let i=0;i<words.length;i++){
        if(words[i].substr(0,pref.length) === pref){
            count++
        }
    }
    return count
}

console.log(prefixCount2(words,pref));