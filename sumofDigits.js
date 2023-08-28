
const sumOfDigits = (num) => {
    let value = num % 10
    let rested = Math.floor(num / 10)
    return value + (rested !== 0 ? sumOfDigits(rested) : 0)

}

const result = sumOfDigits(12345);
console.log(result)