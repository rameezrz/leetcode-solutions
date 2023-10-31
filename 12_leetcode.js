var longestCommonPrefix = (strs)=> {
    for (let i = 0; i < strs.length; i++){
        let current = strs[i]
        let next = strs[i+1]
        let common = ""
        for (let j = 0; j < current.length; j++){
            if (current[j] == next[j]) {
                common+=current[j]
            }
        }
    }
    return common
};

strs = ["flower", "flow", "flight"]

console.log(longestCommonPrefix(strs));