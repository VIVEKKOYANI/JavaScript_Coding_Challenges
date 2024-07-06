function greet(greeting, punctuation) {
    console.log(greeting + ', ' + this.name + punctuation);
}

const person = { name: 'Alice' };

greet.call(person, 'Hello', '!'); // Output: Hello, Alice!

greet.apply(person, ['Hello', '!']); // Output: Hello, Alice!

const boundGreet = greet.bind(person, 'Hello');
boundGreet('!'); // Output: Hello, Alice!


//! call: Invokes the function immediately, passing individual arguments.
//! apply: Invokes the function immediately, passing arguments as an array.
//! bind: Returns a new function with a bound this value and initial arguments, to be called later.
//! Each method is useful in different scenarios where you need to set the this context and pass arguments.
