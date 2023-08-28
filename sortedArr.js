
function binarySearch(arr, num){
    
   if(!arr.length) return -1;
   let mid = Math.floor(arr.length-1/2);

   if (num === arr[mid]) return mid;
   if (num > arr[mid]) return binarySearch(arr.slice(mid+1),num);
   if (num < arr[mid]) return binarySearch(arr.slice(0,mid),num);
}

const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17]; 
console.log(binarySearch(sortedArray, 9))