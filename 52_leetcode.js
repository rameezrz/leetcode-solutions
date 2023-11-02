const n = 34, k = 6

//Method 1
const sumBase = (n, k)=> {
    if(n===0) return '0'

    let result = ''
    while(n>0){
        let remainder = n % k;
        result = remainder+result
        n = Math.floor(n/k)
    }
    return result.split('').reduce((a,e)=>a+Number(e),0)
};

//Method 2
const sumBase2 = (n,k)=>{
    return n.toString(k).split('').reduce((a,e)=>a+Number(e),0)
}



console.log(sumBase2(n,k));