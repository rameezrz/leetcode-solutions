const s = "BOOK"

// const halvesAreAlike = (s)=> {
//     let middleIndex = Math.ceil(s.length/2)
//     let a = s.slice(0,middleIndex).toLowerCase()
//     let b = s.slice(middleIndex).toLowerCase()
//     let count1 = 0
//     let count2 = 0

//     const vowels = ['a','e','i','o','u']

//     for(let i=0;i<a.length;i++){
//         if(vowels.includes(a[i])){
//             count1++
//         }
//     }

//     for(let i=0;i<b.length;i++){
//         if(vowels.includes(b[i])){
//             count2++
//         }
//     }

//     return count1 === count2
// };

const halvesAreAlike = (s)=>{
    const vowels = ['a','e','i','o','u','A','E','I','O','U']
    const middleIndex = Math.ceil(s.length/2)
    let count1 = 0
    let count2 = 0

    for(let i=0;i<middleIndex;i++){
        if(vowels.includes(s[i])){
            count1++
        }
    }

    for(let i=middleIndex;i<s.length;i++){
        if(vowels.includes(s[i])){
            count2++
        }
    }

    return count1 === count2
}

console.log(halvesAreAlike(s));