const original = [1,2], m = 1, n = 1

const construct2DArray = (original, m, n)=> {
    if(m*n!==original.length){
        return []
    }
    const newArr = []
    let index = 0
    for(let i=0;i<m;i++){
        newArr[i] = []
        for(let j=0;j<n;j++){
            newArr[i][j] = original[index++]
        }
    }
    return newArr
};

console.log(construct2DArray(original,m,n));