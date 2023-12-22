const n=3

const numberOfCuts = (n)=> {
    if(n===1){
        return 0
    }else if(n%2===0){
        return n/2
    }else{
        return (Math.ceil(n/2)) + 1
    }
};

console.log(numberOfCuts(n));