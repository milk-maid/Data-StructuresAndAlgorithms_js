function fibonacci(n) {
  // Initialize the first two numbers in the sequence
  const fib = [0, 1];
  // Loop through to generate the rest of the sequence
  for (let i = 2; i < n; i++) { 
    // Each number in the sequence is the sum of the two preceding numbers
    fib[i] = fib[i - 1] + fib[i - 2]; 
  }
  // Return the generated sequence
  return fib; 
}

console.log(fibonacci(3)); // [0, 1, 1]
console.log(fibonacci(5)); // [0, 1, 1, 2, 3]
console.log(fibonacci(7)); // [0, 1, 1, 2, 3, 5, 8]

