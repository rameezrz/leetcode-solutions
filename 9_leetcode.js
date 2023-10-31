// var frequencySort = (nums)=> {
//     let frequency = {}

//     for (let i = 0; i < nums.length; i++){
//         var number = nums[i]
//         if (frequency[number]) {
//             frequency[number]++
//         } else {
//             frequency[number]=1
//         }
//     }
//     return frequency
// };


// nums = [1, 1, 2, 2, 2, 3]

// console.log(frequencySort(nums));



function sortByFrequency(nums) {
    // Step 1: Create a frequency object
    const frequency = {};
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      frequency[num] = frequency[num] ? frequency[num] + 1 : 1;
    }
    return frequency
  
    // // Step 2: Sort the array based on frequency values
    // nums.sort((a, b) => {
    //   // Compare the frequency of a and b
    //   const freqDiff = frequency[a] - frequency[b];
  
    //   // If the frequencies are equal, sort in decreasing order
    //   if (freqDiff === 0) {
    //     return b - a;
    //   }
  
    //   // Sort in increasing order based on frequency
    //   return freqDiff;
    // });
  
    // return nums;
  }
  
  // Example usage:
  const nums = [1, 1, 2, 2, 2, 3, 1];
  const sortedArray = sortByFrequency(nums);
  console.log(sortedArray);
  