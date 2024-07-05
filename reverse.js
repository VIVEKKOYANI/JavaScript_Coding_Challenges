const reverse = (str) => {
    let r_str = '';
    for(let i = str.length - 1; i >= 0; i--) {
        r_str += str[i];
    }

    return r_str;
}

const string = 'hello ascxcro cvlr'

const newOne = string.split(' ').map((item) => reverse(item));

console.log("newOne", newOne);

// console.log(reverse('hello ascxcro cvlr'));