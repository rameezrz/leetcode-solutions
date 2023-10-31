const str1 = "ABABAB", str2 = "ABAB"

var gcdOfStrings = function(str1, str2) {
    if(str1+str2 !== str2+str1) return ""

    function gcd(a,b){
        if(b===0){
            return a
        }
        return gcd(b, a%b)
    }
    const length =gcd(str1.length, str2.length)
    return str1.slice(0,length)
};

console.log(gcdOfStrings(str1,str2));