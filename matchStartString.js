const startWith = (str, substring) => {
    // return str.toLowerCase().startsWith(substring.toLowerCase());
    return str.toLowerCase().slice(0, substring.length) === substring.toLowerCase();
}

console.log(startWith("Hello world", 'hello'));
console.log(startWith("Hello world", 'world'));