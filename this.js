const user = {
  name: "vivek",
  greet() {
    return `Hello, ${this.name}!`;
  },
  farewell: () => {
    return `Goodbye, ${this.name}!`;
  },
};

const abc = Object.freeze({name: 'vivek'});
abc.name = 'Nishit'
console.log("abc", abc);

// console.log("normal fun", user.greet());
// console.log("arrow fun", user.farewell());