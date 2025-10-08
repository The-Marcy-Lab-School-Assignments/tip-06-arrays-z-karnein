// Returns the average of all numbers in an array
const getAverage = (numbers) => {
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i]; // add each number to total
  }

  return total / numbers.length; // divide by number of elements
};

// Test the function
console.log(getAverage([2, 4, 6, 8])); // Output: 5
console.log(getAverage([1, 2, 3])); // Output: 2
