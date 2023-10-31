const nums = [20,100,10,12,5,13]

const increasingTriplet = (nums)=> {
    let min = Infinity
    let secondMin = Infinity

    for(const num of nums){
        if(num <= min){
            min = num
        }else if(num<=secondMin){
            secondMin = num
        }else{
            return true
        }
    }
    return false
};

console.log(increasingTriplet(nums));