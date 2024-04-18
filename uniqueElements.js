const num = [1, 2, 2, 2, 3, 4, 4, 4, 4, 4, 5, 5, 6];

// Initialize an empty object to store the frequency of each element
const frequencyMap = {};

// Iterate through the array to count the frequency of each element
num.forEach(element => {
  // If the element is already in the frequency map, increment its count
  if (frequencyMap[element]) {
    frequencyMap[element]++;
  } else {
    // If the element is not in the frequency map, initialize its count to 1
    frequencyMap[element] = 1;
  }
});

// Extract unique elements from the array
const uniqueArray = Object.keys(frequencyMap).map(Number);

console.log("Unique Array:", uniqueArray);
console.log("Frequency Map:", frequencyMap);