const boxTypes = [[5,10],[2,5],[4,7],[3,9]], truckSize = 10

const maximumUnits = (boxTypes, truckSize)=> {
    boxTypes.sort((a,b)=>b[1]-a[1])
    let totalUnits = 0
    let remainingBoxes = truckSize
    for(let i=0;i<boxTypes.length;i++){
        if(remainingBoxes>=boxTypes[i][0]){
            totalUnits+=boxTypes[i][0]*boxTypes[i][1]
            remainingBoxes-=boxTypes[i][0]
        }else{
            totalUnits+=remainingBoxes * boxTypes[i][1]
            remainingBoxes=0
        }
    }

    return totalUnits
};


console.log(maximumUnits(boxTypes,truckSize));