// 1002. Find Common Characters

var commonChars = (words)=> {
    let chars = String(words).split('')
    chars = [...chars]
    console.log(chars);
};

words = ["bella","label","roller"]

commonChars(words)