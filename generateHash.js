function generateHash(str){
    str = str.split(' ').map((item) => 
    // item.replace(item[0], item[0].toUpperCase())
    item.charAt(0).toUpperCase() + item.slice(1)
);
    console.log("str", str.join(''));
    return `#${str.join('')}`
};

console.log(generateHash('my name is vivek'));