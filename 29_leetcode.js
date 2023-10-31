const candies = [4, 2, 1, 1, 2],
  extraCandies = 1;

const kidsWithCandies = (candies, extraCandies) => {
  // let output = []
  // let maxNum = Math.max(...candies)
  // for (let i = 0; i < candies.length; i++){
  //     if (candies[i] + extraCandies >= maxNum) {
  //         output.push(true)
  //     } else {
  //         output.push(false)
  //     }
  // }
  let maxNum = Math.max(...candies)
  return candies.map(candyAmount=>candyAmount+extraCandies >= maxNum)
};

console.log(kidsWithCandies(candies, extraCandies));
