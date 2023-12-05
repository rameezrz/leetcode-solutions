const num = 4
var countEven = function(num) {
    let count = 0
    for(let i=1;i<=num;i++){
        let value = String(i).split('').reduce((total,element)=>total+parseInt(element),0)
        if(value%2===0){
            count++
        }
    }
    return count
};

console.log(countEven(num));