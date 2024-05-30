const toCamelCase = (str) => {
  str = str
    .trim()
    .split(" ")
    .map((curr, index) => {
      if (index === 0) {
        return curr.toLowerCase();
      } else {
        return curr.charAt(0).toUpperCase() + curr.slice(1).toLowerCase();
      }
    }).join('');

    return str;
};

console.log(toCamelCase("hello world thApa"));
