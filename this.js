const user = {
  name: "vivek",
  greet() {
    return `Hello, ${this.name}!`;
  },
  farewell: () => {
    return `Goodbye, ${this.name}!`;
  },
};

console.log("normal fun", user.greet());
console.log("arrow fun", user.farewell());