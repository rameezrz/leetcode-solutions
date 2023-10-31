var largeGroupPositions = (s) => {
    let arr = [...s]
    let word = ''
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === arr[i+2]) {
            word += arr[i]
            word += arr[i+1]
        } else {
            continue
        }
    }
    return word
};

s = "abcdddeeeeaabbbcd"

console.log(largeGroupPositions(s));