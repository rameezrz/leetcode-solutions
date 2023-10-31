const flowerbed = [0,0,1,0,1], n = 1

const canPlaceFlowers = (flowerbed, n)=> {
    for(let i=0;i<flowerbed.length && n!==0; i++){
        if(flowerbed[i]===0 && flowerbed[i-1]!==1 && flowerbed[i+1]!==1){
            n--
            i++
        }
    }
    return n===0
};

console.log(canPlaceFlowers(flowerbed,n));