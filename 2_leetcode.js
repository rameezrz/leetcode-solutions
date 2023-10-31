var calPoints = (operations)=> {
    let newArray=[]
    for(let i=0;i<operations.length;i++){
        let curr = Number(operations[i])
        
        if(operations[i]==='C'){
            continue
        }else if(operations[i]==='D'){
            let double = operations[i]*2
            newArray.push(double)
        }else if(operations[i]==='+'){
            let add = operations[i]+operations[i-1]
            newArray.push(add)
        }
        newArray.push(curr)
    }
    const sum = newArray.reduce((total,item)=>total+item)
    return newArray
};

var ops = ["5","-2","4","C","D","9","+","+"]
console.log(calPoints(ops));