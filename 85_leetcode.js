const s = "abcdefghij", k = 3, fill = "x"

const divideString = (s, k, fill)=> {
    const result = []

    for(let i=0;i<s.length;i+=k){
        let group = s.slice(i, i+k)
        if(group.length < k){
            group += fill.repeat(k-group.length)
        }
        result.push(group)
    }
    return result
};

console.log(divideString(s,k,fill));



  