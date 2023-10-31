const s1 = "bank",
  s2 = "kanb";

var areAlmostEqual = function (s1, s2) {
  if (s1 === s2) return true;
  if (s1.length !== s2.length) return false;

  const indicesToSwap = [];

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      indicesToSwap.push(i);
    }
  }

  if (
    indicesToSwap.length === 2 &&
    s1[indicesToSwap[0]] === s2[indicesToSwap[1]] &&
    s1[indicesToSwap[1]] === s2[indicesToSwap[0]]
  ) {
    return true;
  }
  return false;
};

console.log(areAlmostEqual(s1, s2));
