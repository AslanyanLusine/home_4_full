
function createCounter() {
    let num = 0;
     return function increment(){
         num++;
         return num;
    } ;
}

let counter = createCounter()


console.log(counter()); 
console.log(counter());