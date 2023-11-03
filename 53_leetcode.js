const s = "a1b2c3d4e"

const replaceDigits = (s)=> {
    let numbers = []
    for(let i = 0; i<s.length;i++){
        if(i%2===0){
            if(i === s.length-1){
                numbers.push(s[i])
                break
            }
            numbers.push(s[i])
            let charNum = s.charCodeAt(i)
            let num = Number(s[i+1])
            numbers.push(String.fromCharCode(charNum+num))
        }
    }
    return numbers.join('')
};

console.log(replaceDigits(s));

