const chars = ["a", "a", "b", "b", "c", "c", "c"];

// Method 1
const compress = (chars) => {
  const newArr = [];
  let count = 0;
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] !== chars[i + 1]) {
      count++;
      newArr.push(chars[i]);
      if (count !== 1) {
        let countStr = count.toString().split("");
        for (const element of countStr) {
          newArr.push(element);
        }
      }
      count = 0;
    } else {
      count++;
    }
  }
  for (let i = 0; i < chars.length; i++) {
    chars[i] = newArr[i];
  }
  return newArr.length;
};

console.log(compress(chars));


// Method 2

function compress2(chars) {
    if (chars.length === 0) return 0; // Handle the empty array

    let index = 0; // Index to track the current position in the modified array
    let count = 1; // Initialize the count for consecutive characters

    for (let i = 1; i < chars.length; i++) {
        if (chars[i] === chars[i - 1]) {
            count++; // Increment the count for consecutive characters
        } else {
            chars[index++] = chars[i - 1]; // Add the character
            if (count > 1) {
                const countStr = count.toString();
                for (let j = 0; j < countStr.length; j++) {
                    chars[index++] = countStr[j]; // Split count into characters
                }
            }
            count = 1; // Reset count for the next character
        }
    }

    chars[index++] = chars[chars.length - 1]; // Add the last character
    if (count > 1) {
        const countStr = count.toString();
        for (let j = 0; j < countStr.length; j++) {
            chars[index++] = countStr[j]; // Split count into characters
        }
    }

    return index; // Return the new length of the array
}

