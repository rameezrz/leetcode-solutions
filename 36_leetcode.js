n = 20

const totalMoney = (n)=> {
    let total = 0 
    let week = 1
    let day = 0
    for(let i=1;i<=n;i++){
        total=total+week+day
        day++
        if(i%7===0){
            week++
            day=0
        }
    }
    return total
};

console.log(totalMoney(n));