const items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], ruleKey = "type", ruleValue = "phone"

const countMatches =  (items, ruleKey, ruleValue)=> {
    let count = 0
    if(ruleKey === "type"){
        for(let i=0; i<items.length;i++){
            for(let j=0;j<1;j++){
                if(ruleValue === items[i][0]){
                    count++
                }
            }
        }
    }else if(ruleKey === "color"){
        for(let i=0; i<items.length;i++){
            for(let j=1;j<2;j++){
                if(ruleValue === items[i][1]){
                    count++
                }
            }
        }
    }else if(ruleKey === "name"){
        for(let i=0; i<items.length;i++){
            for(let j=2;j<3;j++){
                if(ruleValue === items[i][2]){
                    count++
                }
            }
        }
    }
    return count
};

console.log(countMatches(items,ruleKey,ruleValue));
