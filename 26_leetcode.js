const operations = ["X++","++X","--X","X--"]

const finalValueAfterOperations = (operations)=> {
    let x = 0
    for (let i = 0; i < operations.length; i++){
        if (operations[i] === "X++" || operations[i] === "++X") {
            x++
        }
        if (operations[i] === "X--" || operations[i] === "--X") {
            x--
        }
    }
    return x
};

console.log(finalValueAfterOperations(operations));