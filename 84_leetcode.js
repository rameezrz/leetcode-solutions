const gain = [-4,-3,-2,-1,4,3,2]

const largestAltitude = (gain)=> {
    const altitudes = [0] 
    for(let i=0;i<gain.length;i++){
       altitudes[i+1] = altitudes[i]+gain[i]
    }
    return Math.max(...altitudes)
};

console.log(largestAltitude(gain));