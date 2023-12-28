const prices = [2,4,1]

const maxProfit = (prices)=> {
    let left = 0
    let right = 1
    let maxProfit = 0
    while(right<prices.length){
        if(prices[left]<prices[right]){
            let profit = prices[right]-prices[left]
            maxProfit = Math.max(maxProfit, profit)
        }else{
            left = right
        }
        right++
    }
    return maxProfit
};

console.log(maxProfit(prices));