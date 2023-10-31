const hours = [0,1,2,3,4], target = 2

const numberOfEmployeesWhoMetTarget = (hours, target) => {
    // let count = 0
    // for (let i = 0; i < hours.length; i++){
    //     if (hours[i] >= target) {
    //         count++
    //     }
    // }
    // return count
    return hours.filter(i=>i>=target).length
};

console.log(numberOfEmployeesWhoMetTarget(hours,target));