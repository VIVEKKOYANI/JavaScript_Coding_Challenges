const isUpperCase = (char) => {
    if(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90){
        return true
    }
    return false;

    // char === char.isUpperCase();
}

const isLowerCase = (char) => {
    if(char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122){
        return true
    }
    return false;
}

console.log(isUpperCase('S'));
console.log(isLowerCase('S'));