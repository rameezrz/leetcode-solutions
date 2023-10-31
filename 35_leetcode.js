const n = 5

const isPowerOfFour = (n)=> {
    while(n>1){
        if(n%4!==0){
            return false
        }
        n/=4
    }
    return n===1
};

console.log(isPowerOfFour(n));