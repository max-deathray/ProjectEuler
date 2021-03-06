// Project Euler: Problem 2: Even Fibonacci Numbers
// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// By considering the terms in the Fibonacci sequence whose values do not exceed nth term, find the sum of the even-valued terms.

function fiboEvenSum(n) {
  // store the first 2 vals of the Fib sequence
  let first = 1;
  let second = 2;

  // initialize a count at 0
  let count = 0;

  // initialize a sum at 0
  let sum = 0;

  // loop over the fib vals until the nth index
  while (count < n) {
    // evaluate each fib val -> if even
    if (second % 2 === 0) {
      // then add it to the running sum
      sum += second;
    }

    // whether added to sum or not, re-assign the variables:
    // temporarily store the first value in a 'temp' variable
    let temp = first;
    // reassign the first variable to the second
    first = second;
    // reassign the second variable to the sum of 'temp' and second
    second = temp + second;
    // increment the count
    count++;
  }

  // once you have escaped the loop, that means you have reached the nth value and have summed all of the even ones so time to return the sum

  return sum;
}

fiboEvenSum(10);
