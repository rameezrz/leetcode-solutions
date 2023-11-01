const s = "acb", t = "ahbgdc"

const isSubsequence = (s, t)=> {
    let sPointer = 0
    let tPointer = 0

    while(sPointer < s.length && tPointer<t.length){
        if(s[sPointer]===t[tPointer]){
            sPointer++
        }
        tPointer++
    }

    return sPointer === s.length
};


console.log(isSubsequence(s,t));