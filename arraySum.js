function sum(arr,n) {
    if(arr.length === n) {
        return 0;
    }
    return arr[n] + sum(arr,n + 1);
}
console.log(sum([1,2,3],0))