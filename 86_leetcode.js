const cost = [1, 2, 3];

const minimumCost = (cost) => {
  cost.sort((a, b) => b - a);
  let total = 0;

  for (let i=0;i<cost.length;i++){
    if((i+1)%3!==0){
        total += cost[i]
    }
  }

  return total;
};

console.log(minimumCost(cost));




