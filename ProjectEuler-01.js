function multiplesOf3and5(number) {
  // initialize a sum at zero
  let sum = 0;
  // declare a variable set to the lowest possible number that could meet the conditions
  let num = 3;

  // increment that number in a while loop, adding any qualifiying nums to the sum
  while (num < number) {
    if (num % 3 === 0 || num % 5 === 0) {
      sum += num;
    }
    num++;
  }
  // return the final sum
  return sum;
}
