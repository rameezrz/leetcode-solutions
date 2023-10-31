const word = "leet1234code234";

const numDifferentIntegers = (word) => {
  let numArr = word.replaceAll(/[a-z]/g, ' ')
    .split(' ')
    .filter(str => str)
    .map(BigInt)

    let set = new Set(numArr)
    return set.size
};

console.log(numDifferentIntegers(word));
