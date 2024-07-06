function subStract(a, b=2){
    return a + b;
}

function subStractTwo(a){
    return a - 2;
}

function multiplyTwo(a){
    return a * 2;
}

const compose = (...functions) => {
    return (arg) => {
        console.log("value", arg);
        return functions.reduceRight((fn, arg) => arg(fn), arg)
    }
};

const evaluate = compose(subStract, subStractTwo, multiplyTwo);
console.log("ssssssssss", evaluate(5));