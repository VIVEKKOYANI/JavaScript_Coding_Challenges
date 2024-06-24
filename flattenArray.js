let arr = [
  [1, 2],
  [3, 4],
  [5, 6, [7, 8], 9],
  [10, 11, 12],
];

// function customFlat(arr) {
//   return arr.reduce((acc, val) => {
//     if (Array.isArray(val)) {
//       acc.push(...customFlat(val));
//     } else {
//       acc.push(val);
//     }
//     return acc;
//   }, []);
// }

// function customFlat(arr) {
//   let result = [];
//   arr.forEach((ar) => {
//     if (Array.isArray(ar)) {
//       result.push(...customFlat(ar));
//     } else {
//       result.push(ar);
//     }
//   });
//   return result; // Ensure the result is returned after the loop
// }


// console.log("ssss", customFlat(arr));

const newThink = arr.toString().split(',').map(Number);
console.log("newThink", newThink);