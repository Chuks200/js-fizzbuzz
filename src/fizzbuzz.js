function fizzBuzz(lower, upper) {
    let result = [];
    for (let i = lower; i <= upper; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push('FizzBuzz');
        } else if (i % 3 === 0) {
            result.push('Fizz');
        } else if (i % 5 === 0) {
            result.push('Buzz');
        } else {
            result.push(i);
        }
    }
    return result;
}

// Export the function to be used in the test file
module.exports = fizzBuzz;
