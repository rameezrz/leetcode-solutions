const s = "codeleet", indices = [4,5,6,7,0,2,1,3]

const restoreString = (s, indices) => {
    let arr = [];
    let result = "";
    for(let i=0; i<indices.length; i++) {
        arr[indices[i]] = s.charAt(i);
    }
    for(let i=0; i<arr.length; i++) {
        result = result + arr[i];
    }
    return result;
};

console.log(restoreString(s, indices));
