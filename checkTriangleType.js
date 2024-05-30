const checkTriangleType = (a,b,c) => {
    if(a === b && b === c) return 'equilateral';
    if(a === b || b === c || a === c) return 'isosceles';
    return 'scalene';
}

console.log(checkTriangleType(3,3,3));
console.log(checkTriangleType(3,4,3));
console.log(checkTriangleType(5,8,6)); 