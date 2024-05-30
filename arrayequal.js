const arrysAreEqual = (arr1, arr2) => {
    if(arr1.length !== arr2.length){
        return false;
    }

    return arr1.every((cal, index) => cal === arr2[index]);
}

console.log(arrysAreEqual([1,2,3], [1,2,3]));
console.log(arrysAreEqual([1,2,3], [1,2,4]));
console.log(arrysAreEqual([], []));