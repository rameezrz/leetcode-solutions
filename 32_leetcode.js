const accounts = [[1,5],[7,3],[3,5]]


// const maximumWealth = (accounts)=> {
//     let totalArr = []
//     for(let i=0;i<accounts.length;i++){
//         let total = 0
//         for(let j=0;j<accounts[i].length;j++){
//             total+=accounts[i][j]
//         }
//         totalArr.push(total)
//     }
//     return Math.max(...totalArr)
// };

// const maximumWealth = (accounts)=>{
//     let maxWealth = 0
//     for(let i=0;i<accounts.length;i++){
//         let total = 0
//         for(let j=0;j<accounts[i].length;j++){
//             total+=accounts[i][j]
//         }
//         maxWealth = Math.max(maxWealth,total)
//     }
//     return maxWealth
// }

const maximumWealth = (accounts)=>{
    let max = accounts[0].reduce((a,b)=>a+b,0)
    for(let i=1;i<accounts.length;i++){
        let temp = accounts[i].reduce((a,b)=>a+b,0)
        // max = Math.max(max,temp)
        if(max<=temp) max=temp
    }
    return max
}

console.log(maximumWealth(accounts));