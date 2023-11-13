const s = "leetcode", k = 2

const getLucky = (s, k)=> {
    let numStr = []
    for(let i=0;i<s.length;i++){
        numStr.push(s.charCodeAt(i)-96)
    }
    let out = numStr.join('')
    let sum = 0
    for(let i=1;i<=k;i++){
        sum = 0
        for(let j=0;j<out.length;j++){
            sum += parseInt(out[j])
        }
        out = String(sum)
        console.log(out);
    }
    return sum
};

const getLucky2 = (s,k)=>{
    let numStr = ''

    for(let i=0;i<s.length;i++){
        numStr += s.charCodeAt(i)-96
    }

    for(let i=1;i<=k;i++){
        let sum = 0;
        
        for(let j=0;j<numStr.length;j++){
            sum += parseInt(numStr[j])
        }

        numStr = sum.toString()
    }

    return parseInt(numStr)
}

console.log(getLucky2(s,k));