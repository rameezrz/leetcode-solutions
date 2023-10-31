var hasGroupsSizeX = (deck)=> {
    let count=[]
    let temp = 0
    for(let i=0;i<deck.length;i++){
        for(let j=i+1;j<deck.length;j++){
            if(deck[i]==deck[j]){
                temp++
            }
        }
    }
    count.push(temp)
    return count
};

deck = [1,2,3,4,4,3,2,1]
console.log(hasGroupsSizeX(deck));