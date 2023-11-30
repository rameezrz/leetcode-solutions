const s = "bbb"

const checkString = (s)=> {
    return !s.includes('ba')
};

const checkString2 = (s)=>{
    let temp = 'a'
    for(let i=0;i<s.length;i++){
        if(s[i]=== 'b'){
            temp = 'b'
        }
        if(temp === 'b' && s[i] === 'a'){
            return false
        }
    }
    return true
}

console.log(checkString(s));