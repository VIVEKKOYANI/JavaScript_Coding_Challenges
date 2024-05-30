const calculateAverage = (arr) => {
    let total = arr.reduce((acc, curr) => acc+curr,0);
    return total / arr.length;
}

console.log(calculateAverage([5,10,2,8]));

