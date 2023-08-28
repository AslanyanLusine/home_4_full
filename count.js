function countOccurrences(arr,n) {
    let count = 0;
    if(!arr.length) return 0;
    if(arr[0] === n) {
        count++
    
    
    return countOccurrences(arr.slice(1), n);
    }
    return count;
}


const numbers = [2, 3, 4, 2, 5, 2, 6, 2]; 
console.log(countOccurrences(numbers, 2))