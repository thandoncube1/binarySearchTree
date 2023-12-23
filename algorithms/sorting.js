const letters = ['a', 'd', 'z', 'c', 'i', 'r', 'd', 'b'];

// We need to understand sorting when inputs get larger and larger
// especially sorting millions of records for example Google web indexes
// Apple store, Amazon store sorting products. Netflix and Microsoft need to use custom sorting algorithms to make it meaningful for easy access.

const basket = [2, 65, 34, 2, 1, 7, 8];
// console.log(basket.sort());

basket.sort(function() {
    // best practice when sorting numbers using the sort function in JavaScript.
    return a - b;
});

// In JavaScript the sort method converts the numbers to strings and gets the character codes for each of the numbers.

console.log('2'.charCodeAt(0));
console.log('65'.charCodeAt(0));
console.log('34'.charCodeAt(0));
console.log('7'.charCodeAt(0));

// This is affects the result and also the time and space complexity cannot be guaranteed as it is based on implementation. The default sort order is based on the string Unicode characters points.

// Spanish
const spanish = ['único','árbol', 'cosas', 'fútbol'];
// ["cosas", "fútbol", "árbol", "único"] // bad order

// German
const german = ['Woche', 'wöchentlich', 'wäre', 'Wann'];
// ["Wann", "Woche", "wäre", "wöchentlich"] // bad order

spanish.sort(function(a, b) {
    // Another way of actually getting the result correct.
    return a.localeCompare(b);
});
