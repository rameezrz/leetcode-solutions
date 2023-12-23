const details = ["7868190130M7522","5303914400F9211","9273338290F4010"]

const countSeniors = (details)=> {
    let count = 0
    for(let i=0;i<details.length;i++){
        let age = details[i].slice(11,13)
        if(age>60){
            count++
        }
    }
    return count
};

console.log(countSeniors(details));