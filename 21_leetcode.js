const strs = ["flower","flow","flight"]

const longestCommonPrefix = (strs) => {
    let prefix
    for (let i = 0; i < strs.length; i++){
        for (let j = 0; j < strs[i].length; j++){
            if (strs[i][j] == strs[i + 1][j]) {
                prefix += strs[i][j]
            } else {
                break
            }
        }
    }
    return prefix
};

console.log(longestCommonPrefix(strs));

