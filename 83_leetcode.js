const num = 526

var isSameAfterReversals = function(num) {
    var a=[]
    a=num.toString().split('')
    if(num==0){
        return true
    }
    if(a[a.length-1]==0){
       return false
    }else{
        return true
    }
    
}   