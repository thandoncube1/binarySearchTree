// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
// The pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 -> 2+3

function fibonacciIterative(n) { // O(n)
    // code here
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++) {
        arr.push(arr[i-2] + arr[i - 1]);
    }
    return arr[n];
}

function fibonacciRecursive(n) { // O(2^n)
    // code here
    if (n < 2) {
        return n;
    }
    // The function that runs the fibonacci sequence.
    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
}

console.log(fibonacciRecursive(1000));