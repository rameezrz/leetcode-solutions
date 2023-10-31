// var findKthPositive = (arr, k)=> {
//     let missingArr = []
//     for (let i = 1; i <= 15; i++){
//         if (arr[i] !== i) {
//             missingArr.push(i)
//         } else {
//             continue
//         }
//     }
//     return missingArr
// };

// arr = [2, 3, 4, 7, 11]

// console.log(findKthPositive(arr));




var findMissingNumbers = (arr, k) => {
    let missingArr = [];
    let currentNumber = 1;
    let count = 0;
  
    for (let i = 0; i < arr.length; i++) {
      while (currentNumber < arr[i]) {
        missingArr.push(currentNumber);
        count++;
        if (count === k) {
          return missingArr;
        }
        currentNumber++;
      }
      currentNumber = arr[i] + 1;
    }
  
    while (count < k) {
      missingArr.push(currentNumber);
      count++;
      currentNumber++;
    }
  
    return missingArr;
  };
  
  // Example usage:
  const arr = [2, 3, 4, 7, 11];
  const k = 5;
  
  console.log(findMissingNumbers(arr, k));
  