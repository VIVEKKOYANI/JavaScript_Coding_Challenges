const findMin = (arr) => {
 arr = arr.sort((a,b) => {
    if(b > a) return -1;
    })

    return a[0];

    // Math.min(...arr);
}

console.log(findMin([5,10,2,38]));
console.log(findMin([5,-3,0,12,-7]));
console.log(findMin([]));