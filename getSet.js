function privateNum(num) {
    let privateNum = num;
    return {
        get: function(){
            return privateNum;
        },
        set: function(n) {
            privateNum = n;
        },
    }
}

const secretValue = privateNum(42); 
console.log(secretValue.get()); 
secretValue.set(100); 
console.log(secretValue.get())