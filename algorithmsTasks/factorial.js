function factorial(n) {
  //initialize the result (any num * 1 = the num)
  let result = 1;
  // loop through to generate the product of all positive integers >= `n`
  for (let i = 2; i <= n; i++) {
    // multiply the integers thill we get to 2 and return the answer to the `result` variable
    result = result * i;
  }
  return result;
}

console.log(factorial(4)) //24
console.log(factorial(7)) //5040
