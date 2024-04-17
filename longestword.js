function findLongestWord(arr){

    arr = arr.split(" ").sort((a, b) => a.length - b.length);

    // console.log("aar", arr[arr.length - 1]);
     
    return arr.reduce((accum, curword) => curword.length > accum.length ? curword : accum , "")

    // return arr[arr.length - 1];

}

console.log(findLongestWord("create a respo for JavaScript Challenges"));