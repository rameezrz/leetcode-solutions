const s = "   fly me   to   the moon  ";

const lengthOfLastWord = (s) => {
  let words = s.split(" ").filter((word) => word.length > 0);
  if (words.length === 0) {
    return 0;
  }
  return words[words.length - 1].length;
};

console.log(lengthOfLastWord(s));
