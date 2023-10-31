function revStr(s) {
  const reversed = String(s).split("").reverse().join("");
  return reversed;
}

function oddEven(n) {
  if (n % 2 === 1) {
    return "Odd";
  } else {
    return "Even";
  }
}

function printPat(n) {
  let m = n;
  let out = "";
  for (let i = n; i > 0; i--) {
    for (let j = n; j > 0; j--) {
      for (let k = 1; k <= m; k++) {
        out = `${out + j} `;
      }
    }
    out += "$";
    m--;
  }
  return out;
}

function minValue(root) {
  if (root === null) {
    return -1;
  }
  if (!root.left) {
    return root.data;
  } else {
    return this.minValue(root.left);
  }
}

function search(root, x) {
  if (root === null) {
    return 0;
  }
  if (x < root.data) {
    return this.search(root.left, x);
  } else if (x > root.data) {
    return this.search(root.right, x);
  } else {
    return 1;
  }
}

function findIndex(a, n, key) {
  let startIdx;
  let endIdx;
  for (let i = 0; i < n; i++) {
    if (a[i] === key) {
      startIdx = i;
      break;
    }
  }
  for (let i = n - 1; i >= 0; i--) {
    if (a[i] === key) {
      endIdx = i;
      break;
    }
  }
  console.log(`${startIdx} ${endIdx}`);
}

function reverse_digit(n) {
  let num = String(n).split("").reverse().join("");
  return Number(num);
}

function is_palindrome(n) {
  let rev = String(n).split("").reverse().join("");
  if (n == rev) {
    return "Yes";
  } else {
    return "No";
  }
}

function isDigitSumPalindrome(n) {
  let num = String(n);
  let arr = [];
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    arr[i] = Number(num[i]);
    sum += arr[i];
  }
  let rev = String(sum).split("").reverse().join("");
  if (sum == rev) {
    return 1;
  } else {
    return 0;
  }
}

//User function Template for javascript

class Solution {
  isDigitSumPalindrome(N) {
    const sum = [...String(N)].map(Number).reduce((p, c) => p + c, 0);
    const rev = Number([...String(sum)].reverse().join(""));
    if (sum === rev) return 1;
    return 0;
  }
}

function toLower(str) {
  return str.toLowerCase();
}

function getTable(n) {
  let res = [];
  for (let i = 1; i <= 10; i++) {
    res.push(i * n);
  }
  return res;
}

function findSingle(arr) {
  let single = 0;
  for (let i = 0; i < arr.length; i++) {
    single ^= arr[i];
  }
  return single;
}

function armstrongNumber(n) {
  let sum = 0;
  let arr = String(n)
    .split("")
    .map((item) => Number(item));
  arr.forEach((item) => {
    sum += item ** 3;
  });
  if (sum === n) {
    return "Yes";
  } else {
    return "No";
  }
}

var differenceOfSum = (nums) => {
  let elementSum = 0;
  let digitSum = 0;
  let digitElements = "";
  for (let i = 0; i < nums.length; i++) {
    elementSum += nums[i];
    digitElements += nums[i];
  }

  for (let i = 0; i < digitElements.length; i++) {
    digitSum = digitSum + Number(digitElements[i]);
  }
  return elementSum - digitSum;
};

nums = [1, 15, 6, 3];

console.log(differenceOfSum(nums));

str = "RAmeeEZ";
// console.log(revStr(s));

n = 372;
// console.log(oddEven(n))

// console.log(printPat(n));

arr = [1, 2, 3, 5, 3, 2, 1, 4, 5, 6, 6];
// findIndex(a,6,5)
console.log(armstrongNumber(n));
