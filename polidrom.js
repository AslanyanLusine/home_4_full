const str = "racecar";
function isPalindrome(str) {
    if(str.length === 0) return true;
    let firstEl = str[0];
    let lastEl = str[str.length - 1];
    if(firstEl === lastEl) {
        return isPalindrome(str.slice(1,-1))
    }
 return false;
}


console.log(isPalindrome("racecar"));