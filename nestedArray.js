function flattenArray(arr) {
    let flattedArr = [];
 for(let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
        flattedArr = flattedArr.concat(flattenArray(arr[i]))
    } else {
        flattedArr.push(arr[i]);
    }
 }



    return flattedArr;
}


const nestedArray = [1, [2, [3, 4], 5], 6]; 
console.log(flattenArray(nestedArray))