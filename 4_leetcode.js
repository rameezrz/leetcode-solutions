var totalMoney = (n)=> {
   let total = 0;
   let count = 1;
   let j = 0;
   for(let i=1;i<=n;i++){
    total = total+count+j
    j++
    if(i%7===0){
        count++
        j=0
    }
   }
   return total
};

n=20
console.log(totalMoney(n));