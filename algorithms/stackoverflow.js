// Calling maximum stack size by not having a stop or end case for the function that calls itself in the program.
let counter = 0;
function inception() {
    console.log(counter);
    if (counter > 3) {
        return 'done';
    }
    counter++;
    return inception();
    // Creates an error called "RangeError" with message: Maximum stack size exceeded.
    // You need to have a base case in an algorithm. (Stop point)
}

console.log(inception());

/**
 * 1. Identify the base case
 * 2. Identify the recursive case
 * 3. Get closer and closer and return when needed. Usually you have 2 returns a.) For the base case and b.) for the recursive case.
 */