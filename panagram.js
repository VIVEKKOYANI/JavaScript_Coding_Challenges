function panaGram(str) {
    const arr = new Array(26).fill(false);

    let index;

    for(let i = 0; i < str.length; i++){
        if(str[i] >= 'A' && str[i] <= 'Z'){
            index = str.charCodeAt(i) - "A".charCodeAt(0);
        }
        if(str[i] >= 'a' && str[i] <= 'z'){
            index = str.charCodeAt(i) - "a".charCodeAt(0);
        }
        else continue;

        arr[index] = true;
    }

    for(let i=0; i <= arr.length - 1; i++){
        if(arr[i] === false) return false;
    }

    console.log("ddddddd", arr);
    return true;
}

const result = panaGram('The quick brown fox jumps over the lazy dog');
console.log("result", result);