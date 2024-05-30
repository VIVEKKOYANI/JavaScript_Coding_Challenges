const sumOfSquares = (arr) => {
    return arr.reduce((acc, curr) => {
        return acc = acc + (curr * curr);
    })
}

console.log(sumOfSquares([1,2,3]));