const s = "0100"

const minOperations = (s)=> {
    let count = 0
    for(let i=0;i<s.length;i++){
        if(i%2===0){
            if(s[i]==='1'){
                count++
            }
        }else{
            if(s[i]==='0'){
                count++
            }
        }
    }
    const len = s.length

    return Math.min(count,len-count)

};

console.log(minOperations(s));