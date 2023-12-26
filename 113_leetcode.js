const image = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]

const flipAndInvertImage = (image)=> {
    let output = []
    for(let i=0;i<image.length;i++){
        let subArr = image[i].reverse()
        let inverted = []
        for(let j=0;j<subArr.length;j++){
            if(subArr[j]===0){
                inverted.push(1)
            }else if(subArr[j]===1){
                inverted.push(0)
            }
        }
        output.push(inverted)
        inverted = []
    }
    return output
};

console.log(flipAndInvertImage(image));