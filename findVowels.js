const countVowels = (str) => {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let arr = str.split('');
    let count = 0;
    for(let char of arr){
        if(vowels.includes(char.toLowerCase())){
            count++
        }
    }
    return count;
}


console.log(countVowels("Hello world"));
console.log(countVowels("thE quIck brown fox"));
console.log(countVowels("Brrrrp"));