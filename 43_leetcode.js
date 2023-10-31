const s = "leetcode"

// const reverseVowels = (s)=> {
//     const vowels = ['a','e','i','o','u','A','E','I','O','U']
//     const indicesToSwap = []
//     const sArray = s.split('')
//     for(i=0;i<s.length;i++){
//         if(vowels.includes(s[i])){
//             indicesToSwap.push(i)
//         }
//     }
    
//     for(let i=0;i<Math.floor(indicesToSwap.length/2);i++){
//         let temp = sArray[indicesToSwap[i]]
//         sArray[indicesToSwap[i]] = sArray[[indicesToSwap[indicesToSwap.length - 1 - i]]]
//         sArray[[indicesToSwap[indicesToSwap.length - 1 - i]]] = temp
        
//     }
//     return sArray.join('')
// };

const reverseVowels = (s)=>{
    const vowels = new Set(['a','e','i','o','u','A','E','I','O','U'])
    const sArray = s.split('')
    let left = 0
    let right = sArray.length-1

    while(left<right){
        while(left<right && !vowels.has(sArray[left])){
            left++
        }
        while(left<right && !vowels.has(sArray[right])){
            right--
        }

        let temp = sArray[left]
        sArray[left] = sArray[right]
        sArray[right] = temp
        left++
        right--
    }
    return sArray.join('')

}

console.log(reverseVowels(s));






